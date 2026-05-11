type Vars = Record<string, string>

const BOLD = 1
const ITALIC = 2
const UNDERLINE = 8
const CODE = 16

function sub(s: string, v: Vars): string {
  return s.replace(/\{\{(\w+)\}\}/g, (_, k) => v[k] ?? '')
}

function LexText({ node, v }: { node: any; v: Vars }) {
  let c: React.ReactNode = sub(node.text ?? '', v)
  const f = node.format ?? 0
  if (f & CODE) c = <code>{c}</code>
  if (f & BOLD) c = <strong>{c}</strong>
  if (f & ITALIC) c = <em>{c}</em>
  if (f & UNDERLINE) c = <u>{c}</u>
  return <>{c}</>
}

function LexKids({ nodes, v }: { nodes: any[]; v: Vars }) {
  return (
    <>
      {nodes.map((n, i) => (
        <LexNode key={i} node={n} v={v} />
      ))}
    </>
  )
}

function LexNode({ node, v }: { node: any; v: Vars }) {
  if (!node) return null
  const ch: any[] = node.children ?? []

  switch (node.type) {
    case 'text':
      return <LexText node={node} v={v} />

    case 'linebreak':
      return <br />

    case 'heading': {
      const Tag = (node.tag ?? 'h2') as 'h2' | 'h3' | 'h4'
      const cls =
        Tag === 'h2' ? '!mt-10 !mb-4' :
        Tag === 'h3' ? '!mt-7 !mb-3' :
                       '!mt-5 !mb-2'
      return (
        <Tag className={cls}>
          <LexKids nodes={ch} v={v} />
        </Tag>
      )
    }

    case 'paragraph':
      if (ch.length === 0 || (ch.length === 1 && ch[0]?.text === '')) return <br />
      return (
        <p>
          <LexKids nodes={ch} v={v} />
        </p>
      )

    case 'list':
      return node.listType === 'number' ? (
        <ol>
          <LexKids nodes={ch} v={v} />
        </ol>
      ) : (
        <ul>
          <LexKids nodes={ch} v={v} />
        </ul>
      )

    case 'listitem':
      return (
        <li>
          <LexKids nodes={ch} v={v} />
        </li>
      )

    case 'link': {
      const href = node.url ?? node.fields?.url ?? '#'
      const external = node.newTab ?? node.fields?.newTab
      return (
        <a
          href={href}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          <LexKids nodes={ch} v={v} />
        </a>
      )
    }

    default:
      return ch.length ? <LexKids nodes={ch} v={v} /> : null
  }
}

export function RichText({
  content,
  variables = {},
}: {
  content: any
  variables?: Vars
}) {
  const nodes = content?.root?.children
  if (!nodes?.length) return null
  return <LexKids nodes={nodes} v={variables} />
}
