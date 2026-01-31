import { Activity } from '@/types'

export const activities: Activity[] = [
  {
    id: '1',
    title: 'ハイキング',
    description: 'カナダの美しい山々を歩き、自然の壮大さを肌で感じています。トレイルでの出会いと発見が、毎回新鮮な驚きを与えてくれます。',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=400&fit=crop',
    skills: ['登山技術', '写真撮影', 'ナビゲーション', '自然観察']
  },
  {
    id: '2',
    title: 'スキー',
    description: 'ウィスラーやバンフなどの世界クラスのスキーリゾートで、パウダースノーを満喫。冬のカナダの魅力を存分に楽しんでいます。',
    image: 'https://images.unsplash.com/photo-1486022479012-cf8ea2e84c6e?w=600&h=400&fit=crop',
    skills: ['アルペンスキー', 'バックカントリー', '雪山安全技術']
  },
  {
    id: '3',
    title: 'キャンプ',
    description: '星空の下で過ごす夜は格別です。焚き火を囲みながら、自然の音に耳を傾ける時間が心を癒してくれます。',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&h=400&fit=crop',
    skills: ['野外料理', 'テント設営', '焚き火技術', '天体観測']
  },
  {
    id: '4',
    title: '写真撮影',
    description: 'カナダの四季折々の美しさを写真に収めています。風景写真を通じて、この土地の魅力を多くの人に伝えたいと思っています。',
    image: 'https://images.unsplash.com/photo-1464822759844-d150baec0494?w=600&h=400&fit=crop',
    skills: ['風景写真', 'ドローン撮影', '画像編集', '構図理論']
  }
]