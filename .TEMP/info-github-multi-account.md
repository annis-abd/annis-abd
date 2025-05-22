# 🔐 Multiple GitHub Accounts on Windows 11

Manage multiple GitHub accounts on a single Windows machine using separate SSH keys.

---

## 📁 SSH Key Structure

| GitHub Account | SSH Private Key Path               | Host Alias  | Remote URL Format                   |
|----------------|------------------------------------|-------------|-------------------------------------|
| LITTL3BEAR     | `~/.ssh/id_ed25519_littl3bear`     | `annidev`   | `git@annidev:USERNAME/REPO.git`     |
| annis-abd      | `~/.ssh/id_ed25519_annisabd`       | `myoffice`  | `git@myoffice:USERNAME/REPO.git`    |

---

## ⚙️ One-Time Setup

### ✅ 1. Generate SSH Keys

```bash
# LITTL3BEAR account
ssh-keygen -t ed25519 -C "4clover.club@gmail.com" -f ~/.ssh/id_ed25519_littl3bear

# annis-abd account
ssh-keygen -t ed25519 -C "annisabd@ais.co.th" -f ~/.ssh/id_ed25519_annisabd
```

---

### ✅ 2. Add Keys to SSH Agent

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519_littl3bear
ssh-add ~/.ssh/id_ed25519_annisabd
```

> 💡 Tip: Add these commands to your `.bashrc`, `.zshrc`, or `.bash_profile` to load automatically.

---

### ✅ 3. Configure SSH

Edit `~/.ssh/config`:

```ssh
# LITTL3BEAR account
Host annidev
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_littl3bear

# annis-abd account
Host myoffice
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_annisabd
```

---

### ✅ 4. Add Public Keys to GitHub

```bash
cat ~/.ssh/id_ed25519_littl3bear.pub
cat ~/.ssh/id_ed25519_annisabd.pub
```

- Go to GitHub → Settings → **SSH and GPG Keys**
- Click **New SSH Key**, paste the key, and save.

---

## ✅ Test the Connection

```bash
ssh -T git@annidev
ssh -T git@myoffice
```

Expected response:

```
Hi LITTL3BEAR! You've successfully authenticated...
Hi annis-abd! You've successfully authenticated...
```

---

## 📦 Clone Repositories per Account

```bash
# From LITTL3BEAR account
git clone git@annidev:LITTL3BEAR/your-repo.git

# From annis-abd account
git clone git@myoffice:annis-abd/your-repo.git
```

---

## 🛠️ Useful Commands

- `git remote -v` — check the remote URL and account in use
- `git config user.name` — verify the Git user for the repo
