# Infrastructure Deployment for Skywire Repos Viewer

This directory contains Terraform and Ansible configurations to deploy the Skywire Repos Viewer application to a DigitalOcean droplet.

## Prerequisites

### Required Tools
- [Terraform](https://www.terraform.io/downloads) >= 1.0
- [Ansible](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html) >= 2.9
- SSH key pair configured

### Required Accounts
- DigitalOcean account with API token
- Domain name (optional, for SSL)

## Quick Start

### 1. Setup DigitalOcean API Token

```bash
# Get your API token from: https://cloud.digitalocean.com/account/api/tokens
export TF_VAR_DO_TOKEN="your_digitalocean_api_token_here"
```

### 2. Configure Terraform

```bash
# Copy and edit terraform variables
cp terraform.tfvars.example terraform.tfvars
vim terraform.tfvars

# Initialize Terraform
terraform init

# Plan the infrastructure
terraform plan

# Apply the infrastructure
terraform apply
```

### 3. Configure Ansible

```bash
# Copy and edit inventory
cp inventory.ini.example inventory.ini

# Get the droplet IP from Terraform output
terraform output droplet_ip

# Update inventory.ini with the actual IP and also update the ansible_ssh_private_key_file
vim inventory.ini
```


### 4. Deploy Application

```bash
# Run the Ansible playbook
ansible-playbook -i inventory.ini playbook.yml

# Or with tags for specific tasks
ansible-playbook -i inventory.ini playbook.yml --tags "app,nginx"
```

## Configuration Files

### Terraform Configuration

- **`main.tf`** - Main infrastructure definition
- **`versions.tf`** - Provider versions and backend configuration
- **`terraform.tfvars.example`** - Example variables file

### Ansible Configuration

- **`playbook.yml`** - Main deployment playbook
- **`ansible.cfg`** - Ansible configuration
- **`inventory.ini.example`** - Example inventory file
- **`templates/`** - Jinja2 templates for configuration files

## Infrastructure Overview

### DigitalOcean Resources Created

1. **Droplet** - Ubuntu 22.04 LTS server
2. **VPC** - Private network for the droplet
3. **Floating IP** - Static public IP address
4. **Firewall** - Security rules for web traffic
5. **Project** - Organized resource management

### Droplet Specifications

- **Default Size**: 2 vCPU, 2GB RAM, 50GB SSD
- **Operating System**: Ubuntu 22.04 LTS
- **Network**: Private VPC + Public Internet

### Security Features

- **Firewall**: Only SSH (22), HTTP (80), HTTPS (443) allowed
- **Fail2ban**: Automatic IP blocking for suspicious activity
- **UFW**: Host-based firewall configuration
- **SSL**: Automatic certificate management with Let's Encrypt

## Application Stack

### Software Installed

- **Node.js 18** - JavaScript runtime
- **PM2** - Process manager for Node.js applications
- **Nginx** - Web server and reverse proxy
- **Certbot** - SSL certificate management
- **Fail2ban** - Intrusion prevention system

### Application Architecture

```
Internet → Nginx (Port 80/443) → Static Files (React App)
                               ↳ API Proxy → Node.js App (Port 3000)
```

## Deployment Process

### Initial Deployment

1. **Infrastructure Provisioning** (Terraform)
   - Creates DigitalOcean droplet and resources
   - Configures networking and security

2. **Server Provisioning** (Ansible)
   - Installs required software
   - Configures services
   - Deploys application

### Continuous Deployment

```bash
# SSH into the server
ssh root@YOUR_DROPLET_IP

# Use the deployment script
cd /opt/skywire-repos-viewer
./deploy.sh main
```

## Monitoring and Maintenance

### Application Logs

```bash
# PM2 logs
pm2 logs skywire-repos-viewer

# Nginx logs
tail -f /var/log/nginx/skywire-repos-viewer_access.log
tail -f /var/log/nginx/skywire-repos-viewer_error.log
```

### Service Management

```bash
# PM2 application management
pm2 status
pm2 restart skywire-repos-viewer
pm2 stop skywire-repos-viewer

# System services
systemctl status nginx
systemctl status fail2ban
```

### SSL Certificate Renewal

```bash
# Manual renewal (automatic via cron)
certbot renew --dry-run
```

## Customization

### Environment Variables

Edit the inventory file to customize:

- `app_port` - Application port (default: 3000)
- `app_domain` - Domain name for SSL
- `enable_ssl` - Enable/disable SSL certificates
- `ssl_email` - Email for Let's Encrypt notifications

### Resource Sizing

Edit `terraform.tfvars` to change:

- `size` - Droplet size (s-1vcpu-1gb, s-2vcpu-2gb, etc.)
- `region` - DigitalOcean region
- `environment` - Environment name for tagging

## Troubleshooting

### Common Issues

1. **SSH Connection Failed**
   ```bash
   # Check if droplet is running
   terraform show | grep state
   
   # Verify SSH key is correct
   ssh-add -l
   ```

2. **Application Not Starting**
   ```bash
   # Check PM2 logs
   pm2 logs
   
   # Check application directory permissions
   ls -la /opt/skywire-repos-viewer
   ```

3. **Nginx Configuration Error**
   ```bash
   # Test Nginx configuration
   nginx -t
   
   # Check Nginx logs
   tail -f /var/log/nginx/error.log
   ```

### Recovery Commands

```bash
# Restart all services
systemctl restart nginx
pm2 restart all

# Rebuild application
cd /opt/skywire-repos-viewer/app
npm run build
pm2 restart skywire-repos-viewer
```

## Cost Estimation

### Monthly Costs (USD)

- **s-2vcpu-2gb Droplet**: ~$18/month
- **Floating IP**: ~$4/month
- **Bandwidth**: Included (1TB)
- **Total**: ~$22/month

### Cost Optimization

- Use smaller droplet size for development
- Remove floating IP if not needed
- Use snapshots for backups instead of keeping multiple versions

## Security Best Practices

1. **Regular Updates**
   ```bash
   apt update && apt upgrade
   ```

2. **SSH Key Management**
   - Use SSH keys instead of passwords
   - Regularly rotate SSH keys
   - Disable root login after setup

3. **Monitoring**
   - Monitor fail2ban logs
   - Set up uptime monitoring
   - Regular security audits

4. **Backups**
   - Regular database backups (if applicable)
   - Snapshot the droplet monthly
   - Test restore procedures

## Support

For issues with:
- **Terraform**: Check DigitalOcean provider documentation
- **Ansible**: Review playbook syntax and module documentation
- **Application**: Check application logs and PM2 status

## Contributing

1. Test changes in a development environment first
2. Update documentation for any configuration changes
3. Follow security best practices
4. Use semantic versioning for infrastructure changes