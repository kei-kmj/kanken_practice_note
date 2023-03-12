module ApplicationHelper

  def default_meta_tags
    {
      site: 'クイズで漢検',
      title: '漢検練習帳',
      reverse: true,
      charset: 'utf-8',
      description: '漢検1級/準1級の範囲の漢字をクイズ形式で学習できます',
      canonical: request.original_url,
      separator: '|',
    icon: [
      { href: image_url('img.png') },
      { href: image_url('img.png'), rel: 'apple-touch-icon', sizes: '180x180', type: 'image/png' },
    ],
      og: {
      site_name: :site,
      title: :title,
      description: :description,
      type: 'website',
      url: request.original_url,
      image: image_url('img.png'),
      local: 'ja-JP',
    },
      twitter: {
      card: 'summary',
      site: '@kei16180339',
      image: image_url('img.png'),
    }
    }
  end
end