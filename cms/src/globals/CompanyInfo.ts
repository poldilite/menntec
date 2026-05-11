import type { GlobalConfig } from 'payload'

export const CompanyInfoGlobal: GlobalConfig = {
  slug: 'company-info',
  label: 'Firmendaten',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Einstellungen',
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'companyName',
          type: 'text',
          label: 'Firmenname',
          required: true,
          defaultValue: 'MennTEC',
          admin: { width: '70%' },
        },
        {
          name: 'legalForm',
          type: 'text',
          label: 'Rechtsform',
          admin: {
            width: '30%',
            description: 'z.B. GmbH, GbR, e.K.',
          },
        },
      ],
    },
    {
      name: 'street',
      type: 'text',
      label: 'Straße & Hausnummer',
      required: true,
      defaultValue: 'Am Grünen Weg 23',
    },
    {
      type: 'row',
      fields: [
        {
          name: 'zip',
          type: 'text',
          label: 'PLZ',
          required: true,
          defaultValue: '52385',
          admin: { width: '30%' },
        },
        {
          name: 'city',
          type: 'text',
          label: 'Ort',
          required: true,
          defaultValue: 'Nideggen',
          admin: { width: '70%' },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'email',
          type: 'email',
          label: 'E-Mail',
          required: true,
          defaultValue: 'info@menntec.de',
          admin: { width: '50%' },
        },
        {
          name: 'phone',
          type: 'text',
          label: 'Telefon',
          admin: { width: '50%' },
        },
      ],
    },
    {
      name: 'geschaeftsfuehrer',
      type: 'text',
      label: 'Geschäftsführer',
      admin: {
        description: 'Vollständiger Name, z.B. "Holger Menne"',
      },
    },
    {
      type: 'collapsible',
      label: 'Handelsregister & Steuer',
      admin: { initCollapsed: true },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'handelsregisterGericht',
              type: 'text',
              label: 'Amtsgericht',
              admin: {
                width: '50%',
                description: 'z.B. "Amtsgericht Düren"',
              },
            },
            {
              name: 'handelsregisterNr',
              type: 'text',
              label: 'HRB-Nummer',
              admin: {
                width: '50%',
                description: 'z.B. "HRB 12345"',
              },
            },
          ],
        },
        {
          name: 'ustIdNr',
          type: 'text',
          label: 'USt-Identifikationsnummer',
          admin: {
            description: 'z.B. "DE123456789"',
          },
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Datenschutzbeauftragter',
      admin: {
        initCollapsed: true,
        description: 'Nur ausfüllen wenn vorhanden (gesetzlich nicht immer erforderlich)',
      },
      fields: [
        {
          name: 'datenschutzContact',
          type: 'relationship',
          relationTo: 'contacts',
          label: 'Datenschutzbeauftragter (Kontakt)',
          admin: {
            description: 'Verlinkung zu einem bestehenden Kontakt',
          },
        },
      ],
    },
  ],
}
