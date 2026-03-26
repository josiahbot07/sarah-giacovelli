import { Helmet } from 'react-helmet-async'

interface Props {
  data: Record<string, unknown>
}

export function StructuredData({ data }: Props) {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  )
}
