# Protokol Proteksi Data & Kesinambungan Kerja — Claude Code

Berlaku untuk SEMUA sesi Claude Code, tanpa terkecuali. Tujuannya satu: tidak ada kerja yang hilang, tidak ada data yang tertimpa tanpa sengaja, dan setiap sesi baru melanjutkan dari state terakhir — bukan mulai dari 0.

## Aturan Wajib (Non-negotiable)

### 1. Backup sebelum operasi berisiko
Sebelum menjalankan operasi yang berpotensi menghapus atau menimpa data (migrasi skema, bulk update/delete, overwrite file besar, perubahan struktur database):
- Buat backup/snapshot dulu sebelum eksekusi.
- Firestore: export collection terkait sebelum perubahan struktural (mis. `gcloud firestore export` atau script export ke JSON lokal).
- Google Sheets/Apps Script: duplikat sheet atau simpan versi sebelum overwrite besar.
- File umum: copy versi lama ke folder `/backups/YYYY-MM-DD/` sebelum ditimpa.
- Kalau ragu apakah suatu operasi "berisiko", perlakukan sebagai berisiko — backup dulu, baru jalan.

### 2. Commit git untuk setiap unit kerja yang selesai
- Tidak ada pekerjaan yang selesai tapi belum di-commit.
- Commit granular per fitur/fix — jangan tumpuk semua perubahan jadi satu commit besar di akhir sesi.
- Commit message jelas: apa yang berubah dan kenapa (bukan "update" atau "fix").
- Sebelum sesi berakhir, pastikan `git status` bersih. Kalau ada yang belum ter-commit, laporkan ke user beserta alasannya — jangan biarkan begitu saja.

### 3. Semua update tersimpan permanen di persistent store proyek
- Setiap perubahan data ditulis ke source of truth proyek tsb — bukan cuma tersimpan di local/session state yang hilang saat sesi ditutup.
- Firestore (untuk proyek yang memang pakai Firestore, mis. BD Knowledge Base webapp): tulis langsung ke Firestore.
- Google Sheets/Apps Script (mis. reconciliation bots, outreach automation): tulis ke sheet/PropertiesService.
- Proyek lain: tulis ke persistent store yang jadi source of truth proyek tsb.
- **Catatan penting:** tidak semua project pakai Firestore — jangan paksakan Firestore ke project yang source of truth-nya Sheets atau file lain. Prinsipnya "selalu commit ke source of truth proyek", Firestore hanya salah satu implementasinya.

### 4. Dilarang re-seed atau reset data tanpa izin eksplisit
- Script seed/init yang menghapus lalu menulis ulang data dari nol TIDAK BOLEH dijalankan ulang hanya karena ada instruksi/perintah baru.
- Default behavior: data yang sudah ada diperlakukan sebagai source of truth. Perintah baru = **update/upsert incremental** di atas data existing, bukan replace total.
- Re-seed/reset hanya boleh dijalankan kalau user secara eksplisit meminta (kata kunci jelas seperti "reset dari 0", "hapus semua data", "seed ulang total").
- Sebelum menjalankan apa pun yang mengandung `seed`, `reset`, `drop`, `truncate`, atau `delete all` — konfirmasi dulu ke user, walaupun konteks sebelumnya terlihat mengizinkan.

## Checklist Awal Sesi
- [ ] Cek `git log` dan `git status` — lihat state terakhir sebelum mulai kerja
- [ ] Cek data existing (Firestore/Sheets/file) sebelum asumsi project "kosong"
- [ ] Jangan pernah asumsikan mulai dari 0 tanpa verifikasi eksplisit

## Checklist Akhir Sesi / Task
- [ ] Semua perubahan sudah di-commit git dengan message yang jelas
- [ ] Semua perubahan data sudah tersimpan permanen di persistent store, bukan cuma di memory session
- [ ] Kalau ada operasi berisiko dilakukan, backup sudah dibuat lebih dulu
- [ ] Tidak ada seed/reset yang dijalankan tanpa izin eksplisit dari user
