# Modul 4 Mobile — Database & Autentikasi

Proyek praktikum Modul 4 Mobile: aplikasi Expo (React Native + TypeScript + Expo Router) dengan Supabase sebagai database cloud (PostgreSQL + Auth + RLS).

## Stack

Expo SDK 58, React Native, TypeScript, Expo Router, Supabase, expo-secure-store.

## Codelab

1. Brankas Terenkripsi — SecureStore (`asset/SecureVaultDemo.tsx`)
2. Cloud Bridge — client Supabase + health check (`src/lib/supabase.ts`)
3. Perekrutan Pahlawan — daftar + masuk (`src/app/(auth)/login.tsx`)
4. Penjaga Gerbang — AuthContext + route guard (`src/context/AuthContext.tsx`)
5. Papan Misi Taktis — CRUD `missions` + RLS (`src/app/(app)/index.tsx`)

## Cara menjalankan

```bash
npm install
cp .env.example .env   # isi dari project Supabase kamu sendiri
# jalankan supabase/missions.sql di Supabase SQL Editor
npx expo start
```
