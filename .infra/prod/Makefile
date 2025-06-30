# Makefile for Skywire Repos Viewer Infrastructure

.PHONY: help init plan apply destroy deploy status logs clean ssh

# Default target
help:
	@echo "🚀 Skywire Repos Viewer Infrastructure Management"
	@echo ""
	@echo "Terraform Commands:"
	@echo "  init     - Initialize Terraform"
	@echo "  plan     - Plan infrastructure changes"
	@echo "  apply    - Apply infrastructure changes"
	@echo "  destroy  - Destroy infrastructure"
	@echo "  output   - Show Terraform outputs"
	@echo ""
	@echo "Ansible Commands:"
	@echo "  deploy   - Deploy application with Ansible"
	@echo "  check    - Run Ansible in check mode"
	@echo "  tags     - Run specific Ansible tags (e.g. make tags TAGS=nginx,app)"
	@echo ""
	@echo "Utility Commands:"
	@echo "  status   - Show application status"
	@echo "  logs     - Show application logs"
	@echo "  ssh      - SSH into the droplet"
	@echo "  backup   - Create backup of current deployment"
	@echo "  clean    - Clean up temporary files"
	@echo ""
	@echo "Setup Commands:"
	@echo "  setup    - Complete setup (init + apply + deploy)"
	@echo "  validate - Validate all configuration files"

# Terraform commands
init:
	@echo "🔧 Initializing Terraform..."
	terraform init

plan:
	@echo "📋 Planning infrastructure changes..."
	terraform plan

apply:
	@echo "🚀 Applying infrastructure changes..."
	terraform apply

destroy:
	@echo "💥 Destroying infrastructure..."
	terraform destroy

output:
	@echo "📊 Terraform outputs:"
	terraform output

# Ansible commands
deploy:
	@echo "🎯 Deploying application..."
	ansible-playbook -i inventory.ini playbook.yml

check:
	@echo "🔍 Running Ansible in check mode..."
	ansible-playbook -i inventory.ini playbook.yml --check

tags:
	@echo "🏷️  Running Ansible with tags: $(TAGS)"
	ansible-playbook -i inventory.ini playbook.yml --tags "$(TAGS)"

# Utility commands
status:
	@echo "📊 Checking application status..."
	ansible web -i inventory.ini -m shell -a "pm2 status"

logs:
	@echo "📜 Fetching application logs..."
	ansible web -i inventory.ini -m shell -a "pm2 logs --lines 50"

ssh:
	@echo "🔑 Connecting to droplet..."
	@IP=$$(terraform output -raw floating_ip 2>/dev/null || terraform output -raw droplet_ip); \
	ssh root@$$IP

backup:
	@echo "💾 Creating backup..."
	ansible web -i inventory.ini -m shell -a "cd /opt/skywire-repos-viewer && tar -czf backups/manual_backup_$$(date +%Y%m%d_%H%M%S).tar.gz app/"

clean:
	@echo "🧹 Cleaning up temporary files..."
	rm -f *.log
	rm -f .terraform.lock.hcl
	find . -name "*.retry" -delete

# Setup commands
setup: init apply deploy
	@echo "✅ Complete setup finished!"
	@echo "🌐 Your application should be available at:"
	@terraform output web_url

validate:
	@echo "✅ Validating Terraform configuration..."
	terraform validate
	@echo "✅ Validating Ansible playbook..."
	ansible-playbook -i inventory.ini playbook.yml --syntax-check
	@echo "✅ All configurations are valid!"

# Development helpers
dev-deploy:
	@echo "🔧 Quick deployment for development..."
	ansible-playbook -i inventory.ini playbook.yml --tags "app" --skip-tags "ssl"

restart:
	@echo "🔄 Restarting application..."
	ansible web -i inventory.ini -m shell -a "pm2 restart skywire-repos-viewer"

rebuild:
	@echo "🔨 Rebuilding application..."
	ansible web -i inventory.ini -m shell -a "cd /opt/skywire-repos-viewer/app && npm run build && pm2 restart skywire-repos-viewer"

# Monitoring
health:
	@echo "🏥 Checking application health..."
	@IP=$$(terraform output -raw floating_ip 2>/dev/null || terraform output -raw droplet_ip); \
	curl -f http://$$IP/health || echo "❌ Health check failed"

ping:
	@echo "🏓 Pinging droplet..."
	ansible web -i inventory.ini -m ping

# Security
security-update:
	@echo "🔒 Running security updates..."
	ansible web -i inventory.ini -m apt -a "upgrade=dist update_cache=yes" --become

firewall-status:
	@echo "🛡️  Checking firewall status..."
	ansible web -i inventory.ini -m shell -a "ufw status" --become

# Variables
TAGS ?= all
ENV ?= prod