/** @type {import('tailwindcss').Config} */

// extend を使うとき:
// Tailwind CSS の既存クラスを活用しながら、新しい値を追加したい場合。
// 一部のデフォルト値だけを変更したい場合。

// extend を使わないとき:
// デフォルトの設定を使わず、完全にカスタマイズしたい場合。
// プロジェクト固有のデザインシステムを作成している場合。

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: '640px', // スマホ
        md: '768px', // タブレット
        lg: '1024px', // ノートPC
        xl: '1280px', // デスクトップPC
      },
      colors: {
        primary: {
          DEFAULT: '#447900',
          light: '#e7f2d4',
          light2: '#5BA800',
        },
        secondary: {
          DEFAULT: '#a75e05',
          dark: '#7B4402',
        },
        indigo: {
          DEFAULT: '#001C79',
        },
        yelow: {
          light: '#ECF86C'
        },
        gray: {
          50: '#f9f9f9',
          900: '#484d48',
        },
        
      },
      fontFamily: {
        sans: ['Noto Sans JP, "ヒラギノ角 Pro W3", "Hiragino Kaku Pro W3", "メイリオ", Meiryo, "MS Pゴシック", "MS PGothic", sans-serif'],
      },
      borderRadius: {
        none: '0px',
        sm: '4px',
        DEFAULT: '8px', // rounded クラス
        md: '16px',
        lg: '24px',
        xl: '48px',
        '2xl': '72px',
        '3xl': '80px',
        '4xl': '120px',
        full: '50%',
      },
      boxShadow: {
        sm: '0 0 10px rgba(28, 28, 27, 0.16)',
        DEFAULT: '0 0 20px rgba(28, 28, 27, 0.16)',
      },
      fontSize: {
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '40px',
        '5xl': '48px',
        '6xl': '64px',
      },
      maxWidth: {
        '1200': '1200px',
        '780': '780px',
      },
      minHeight: {
        '100': '100px',
        '200': '200px'
      },
    },
    container: {
      padding: {
        DEFAULT: '16px',
      },
      screens: {
        sm: '100%', 
        md: '100%',
        lg: '1200px',
        xl: '1200px',
      },
    },
    spacing: {
      px: '1px',
      0: '0px',
      1: '2px',
      2: '4px',
      3: '8px',
      4: '12px',
      5: '16px',
      6: '24px',
      8: '32px',
      9: '40px',
      10: '48px',
      11: '64px',
      12: '80px',
      13: '120px',
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.l-content .container': {
          paddingBlock: '80px',
          '@screen md': {
            paddingInline: '32px',
            paddingBlock: '120px',
          },
        },
      });
    },
  ],
};
