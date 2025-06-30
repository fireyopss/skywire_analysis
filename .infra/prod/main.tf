terraform {
  required_providers {
     digitalocean = {
      source  = "digitalocean/digitalocean"
      version = "~> 2.0"
    }
  }
}

provider "digitalocean" {
  token = var.do_token
}

# Variables
variable "do_token" {
  description = "DigitalOcean API token"
  type        = string
  sensitive   = true
}


variable "ssh_key_path" {
  description = "Skywire ssh path"
  type        = string
  default     = "~/.ssh/skywire.pub"
}

variable "region" {
  description = "DigitalOcean region"
  type        = string
  default     = "sfo3"
}

variable "size" {
  description = "Droplet size"
  type        = string
  default     = "s-1vcpu-512mb-10gb"
}


variable "droplet_name" {
  description = "Name of the droplet"
  type        = string
  default     = "skywire-repos-preview"
}

resource "digitalocean_ssh_key" "main" {
  name       = "skywire-repos-key"
  public_key = file(var.ssh_key_path)
}

resource "digitalocean_droplet" "web" {
  image    = "ubuntu-24-04-x64"
  name     = var.droplet_name
  region   = var.region
  size     = var.size
  ssh_keys = [digitalocean_ssh_key.main.id]

  # Basic user data for initial setup
  user_data = <<-EOF
    #!/bin/bash
    apt-get update
    apt-get install -y nginx curl wget git
    systemctl enable nginx
    systemctl start nginx
  EOF

  tags = ["skywire-repos", "web"]
}

output "droplet_ip" {
  value       = digitalocean_droplet.web.ipv4_address
  description = "The IP address of the droplet"
}

output "ssh_command" {
  value       = "ssh root@${digitalocean_droplet.web.ipv4_address}"
  description = "SSH command to connect to the droplet"
}