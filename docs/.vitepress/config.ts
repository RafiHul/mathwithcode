import { defineConfig } from 'vitepress'
import { sharedConfig } from './shared.config'
import sidebar from './sidebar'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...sharedConfig,

  locales: {
    root: {
      label: 'Indonesia',
      lang: 'id-ID',
      description: 'Belajar matematika dengan barisan kode',
      themeConfig: {
        nav: [
          {
            text: 'Belajar', link: '/guide/',
          },
          {
            text: 'Kontribusi', link: 'https://github.com/xirf/mathwithcode'
          },
          {
            text: 'Donasi', link: 'https://trakteer.id/xirf'
          }
        ],
        sidebar,
        editLink: {
          pattern: 'https://github.com/xirf/mathwithcode/edit/master/docs/:path',
          text: 'Perbaiki halaman ini di GitHub'
        },
        
        footer: {
          message: 'Dirilis di bawah lisensi MIT',
          copyright: 'Copyright © 2024-present Anka Tama & Contributors'
        }
      }
    },
  }
})
