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
        'installing/windows_service',
        'installing/linux_service',
      ],
    },
    {
      type: 'category',
      label: 'Configuration',
      link: {
        type: 'doc',
        id: 'configuration/index',
      },
      collapsed: true,
      items: [
        'configuration/preconfiguration',
        {
          type: 'category',
          label: 'Settings',
          link: {
            type: 'doc',
            id: 'configuration/settings/index',
          },
          items: [
            'configuration/settings/grid_settings',
          ],
        },
        'configuration/updating_client_bundle',
        'configuration/yaml_import_export',
      ],
    },
    {
      type: 'category',
      label: 'Software usage',
      link: {
        type: 'doc',
        id: 'software_usage/index',
      },
      collapsed: false,
      items: [
        'software_usage/creating_printers',
        'software_usage/organizing_floors',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      link: {
        type: 'doc',
        id: 'troubleshooting/index',
      },
      collapsed: false,
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
    'community/links',
    {
      type: 'link',
      label: 'Chat with us on Discord',
      href: 'https://discord.gg/mwA8uP8CMc',
    },
  ],
};

export default sidebars;
