import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

 const sidebars: SidebarsConfig = {
  docs: [
    'introduction',
    {
      type: 'category',
      label: 'Installing',
      link: {
        type: 'doc',
        id: 'installing/index',
      },
      collapsed: false,
      items: [
        'installing/monsterpi',
        'installing/docker_compose',
        {
          type: 'category',
          label: 'Deprecated',
          link: {
            type: 'doc',
            id: 'installing/deprecated/index',
          },
          items: [
            'installing/deprecated/windows_service',
            'installing/deprecated/linux_service',
            'installing/deprecated/preconfiguration',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Software Usage',
      link: {
        type: 'doc',
        id: 'software_usage/index',
      },
      collapsed: true,
      items: [
        'software_usage/first-time-setup',
        'software_usage/getting-started',
        {
          type: 'category',
          label: 'FDM Monster Menu Items',
          link: {
            type: 'doc',
            id: 'software_usage/menu/index',
          },
          items: [
            {
              type: 'category',
              label: 'Home',
              link: {
                type: 'doc',
                id: 'software_usage/menu/home/index',
              },
              items: [
              ],
            },
            {
              type: 'category',
              label: 'Printers',
              link: {
                type: 'doc',
                id: 'software_usage/menu/printers/index',
              },
              items: [
              ],
            },
            {
              type: 'category',
              label: 'Cameras',
              link: {
                type: 'doc',
                id: 'software_usage/menu/cameras/index',
              },
              items: [
              ],
            },
            {
              type: 'category',
              label: 'Settings',
              link: {
                type: 'doc',
                id: 'software_usage/menu/settings/index',
              },
              items: [
                'software_usage/menu/settings/grid_settings',
              ],
            },

          ],
        },
        'software_usage/moonraker',
        'software_usage/updating_client_bundle',
        'software_usage/yaml_import_export',
      ],
    },
    {
      type: 'category',
      label: '[TBD] Old Software usage',
      link: {
        type: 'doc',
        id: 'old_software_usage/index',
      },
      collapsed: true,
      items: [
        'old_software_usage/creating_printers',
        'old_software_usage/organizing_floors',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      link: {
        type: 'doc',
        id: 'troubleshooting/index',
      },
      collapsed: true,
      items: [
        'troubleshooting/log_dump',
        'troubleshooting/sentry',

      ],
    },
  ],
  development: [
    'developer_setup/introduction',
    'developer_setup/setup_server',
    'developer_setup/setup_client',
    'developer_setup/setup_octoprint',
    'developer_setup/setup_moonraker',
  ],
  community: [
    'community/support',
    'community/ourteam',
    'community/sponsor-us',
    'community/links',
    {
      type: 'link',
      label: 'Chat with us on Discord',
      href: 'https://discord.gg/mwA8uP8CMc',
    },
  ],
};

export default sidebars;
