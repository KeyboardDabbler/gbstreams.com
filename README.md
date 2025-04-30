# GBstreams Website 🌟

**GBstreams Website** is a passion project built to bring together the best features of various selfhosted apps into one sleek, unified platform. It’s designed to help me grow as a fullstack developer while creating something useful and fun. 🎬✨

---

## 🚀 Built With

- **Frontend:** [Nuxt 3](https://nuxt.com)
- **Backend:** Nitro server routes
- **Database:** [Drizzle](https://orm.drizzle.team/) + SQLite
- **Libraries:**
  - [`@jellyfin/sdk`](https://github.com/jellyfin/jellyfin-sdk-typescript)
  - [`@nuxt/ui-pro`](https://ui.nuxt.com/pro)
  - [`@vue-email/components`](https://vue-email.com)
  - [`auth-utils`](https://nuxt.com/modules/auth-utils)
  - [`@pinia/nuxt`](https://nuxt.com/modules/pinia)
  - [Nodemailer](https://nodemailer.com)
- **Hosting:** Deployed on [Vercel](https://vercel.com)

---

## 🖼️ Previews

> _Coming soon:_

---

## ✅ Checklist Summary

### 🛠 Features Required Now before v1
- [x] User authentication
  - [x] Login with Jellyfin
  - [ ] Site admin user role
- [ ] Invitation System
  - [ ] Set profiles
  - [ ] Set policy
  - [ ] Create referral codes manually
  - [ ] Set referral options (expiry, usage count, etc.)
  - [ ] Assign codes to users
  - [ ] Edit or expire existing codes
  - [ ] Get notified when:
    - [ ] Code expires
    - [ ] Someone signs up using a code
    - [ ] User status changes
  - [ ] User Referral Management
    - [ ] View own code and referral stats
    - [ ] Share code via copy or email
    - [ ] Track who signed up using their code
    - [ ] Limit how many people they can invite
- [ ] Signup Page
  - [ ] Accept referral code
  - [ ] Verify it before showing the signup form
  - [ ] Apply invite constraints (expiry, usage count, duration)
  - [ ] Track who referred who
  - [ ] Invite code signup
  - [ ] Assign referral codes to users
- [ ] System Stats
  - [ ] User stats
    - [ ] Play count
    - [ ] Playback report
    - [ ] Watch History
    - [ ] Latest Media
  - [ ] Global stats
    - [ ] Activity streams
    - [ ] Most watched (play count, duration)
    - [ ] Library Stats
    - [ ] Global Play Count
    - [ ] User Stats (plays)
    - [ ] User Recent Activity
    - [ ] Player/ device Stats
    - [ ] History
  - [ ] User play count
  - [ ] Playback report
  - [ ] Watch History
  - [ ] Latest Media


- [ ] Web Player built with Vue
  - [ ] Jellyfin integration
  - [ ] Add Studios section
  - [ ] Add Networks section
- [ ] Jellyseerr intergration
  - [ ] Add Discovery page
  - [ ] Add request status to dashboard
- [ ] Rebrand for public release
  - [ ] Change project name and logo
  - [ ] Add public config
  - [ ] Update README

### 🕒 Additional Features (Planned)
- [ ] Server logs in dashboard
- [ ] Token invite URLs
- [ ] Scheduled tasks with `defineNitroTasks()`
- [ ] Metrics & analytics
- [ ] API rate limiting / abuse prevention

---

## ⚙️ Backend Flow: Nitro Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/jellyfin` | Login using Jellyfin, retrieve token |
| `GET`  | `/api/me` | Get logged-in user info |
| `GET`  | `/api/referrals` | Get current user referral stats |
| `POST` | `/api/invite/generate` | Admin: create an invite |
| `GET`  | `/api/invite/:code` | Validate invite on signup form |
| `POST` | `/api/signup` | Complete signup with a valid invite |
| `POST` | `/api/email/invite` | Send invite via email |
| `POST` | `/api/admin/user/:id` | Update user, assign invites, etc. |

---

## 📄 License

This project is licensed under the **[MIT License](LICENSE)**.

---

## 🌟 Support

If you enjoy this project, please consider [starring ⭐ the repo](https://github.com/keyboarddabbler/gbstreams.com)!  
Contributions, feedback, and feature suggestions are all welcome! 🛠️

---

_Thanks for checking out GBstreams! 🎬_
