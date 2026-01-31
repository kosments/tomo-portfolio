import { Activity } from '@/types'

export const activities: Activity[] = [
  {
    id: '1',
    title: 'Hiking & Trekking',
    description: 'ロッキー山脈と沿岸山脈の広大なトレイルを探索しています。',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=400&fit=crop',
    skills: ['Mountain', '登山技術', '写真撮影', 'ナビゲーション', '自然観察']
  },
  {
    id: '2',
    title: 'Kayaking',
    description: '静寂な湖と氷河の水をパドリングしています。',
    image: 'https://images.unsplash.com/photo-1486022479012-cf8ea2e84c6e?w=600&h=400&fit=crop',
    skills: ['Waves', 'カヤック技術', '水上安全', '自然観察']
  },
  {
    id: '3',
    title: 'Camping',
    description: '深い荒野で自然とのつながりを取り戻しています。',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&h=400&fit=crop',
    skills: ['Tent', '野外料理', 'テント設営', '焚き火技術', '天体観測']
  },
  {
    id: '4',
    title: 'Photography',
    description: '野生の光と影の瞬間を捉えています。',
    image: 'https://images.unsplash.com/photo-1464822759844-d150baec0494?w=600&h=400&fit=crop',
    skills: ['Camera', '風景写真', 'ドローン撮影', '画像編集', '構図理論']
  }
]