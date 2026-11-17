// Deklarasi tipe untuk impor CSS yang dipakai template bawaan Expo
// (animated-icon.module.css dan global.css).
declare module '*.css';
declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
