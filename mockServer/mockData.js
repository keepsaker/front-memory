const mockData = {
  memories: [
    {
      id: '1',
      title: '(추억)얌샘김밥 갔다온 건에 대하여..',
      category: '여행',
      tags: [
        {
          id: 1,
          name: '분식',
          color: 'red',
        },
      ],
      visitedAt: '2023-07-14',
      content:
        '봄은 동틀 무렵. 산 능선이 점점 하얗게 변하면서 조금씩 밝아지고, 그 위로 보랏빛 구름이 가늘게 떠 있는 풍경이 멋있다. 여름은 밤. 달이 뜨면 더할 나위 없이 좋고, 칠흑같이 어두운 밤에도 반딧불이가 반짝반짝 여기저기에서 날아다니는 광경이 근사하다. 반딧불이가 한 마리나 두 마리 희미하게 빛을 내며 지나가는 것도 운치 있다. 비 오는 밤도 좋다. ',
      star: 5,
      images: [
        'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
      ],
      location: {
        latitude: 37.5741,
        longitude: 126.9768,
      },
    },
    {
      id: '2',
      title: '(후회)1얌샘김밥 갔다온 건에 대하여2..',
      category: '음식점',
      tags: [
        {
          id: 1,
          name: '분식',
          color: 'blue',
        },
      ],
      visitedAt: '2023-07-14',
      content:
        '최고의 시간이었고, 최악의 시간이었다. 지혜의 시대였고, 어리석음의 시대였다. 믿음의 세기였고, 불신의 세기였다. 빛의 계절이었고, 어둠의 계절이었다. 희망의 봄이었고, 절망의 겨울이었다. 우리 앞에 모든 것이 있었고, 우리 앞에 아무것도 없었다',
      star: 1,
      images: [
        'https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
      ],
      location: {
        latitude: 132.32,
        longitude: 82.2123,
      },
    },
    {
      id: '3',
      title: '(추억)마카롱 카페에서 휴식',
      category: '카페',
      tags: [
        {
          id: 2,
          name: '디저트',
          color: 'yellow',
        },
      ],
      visitedAt: '2023-07-15',
      content:
        '그래서 우리는 계속 앞으로 나아가는 것이다. 흐름을 거슬러가는 조각배처럼, 끊임없이 과거로 떠밀려가면서도.',
      star: 4,
      images: [
        'https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2156&q=80',
      ],
      location: {
        latitude: 132.43,
        longitude: 82.102,
      },
    },
    {
      id: '4',
      title: '(후회)마카롱 카페에서 휴식',
      category: '카페',
      tags: [
        {
          id: 2,
          name: '디저트',
          color: 'FF00FF',
        },
      ],
      visitedAt: '2023-07-15',
      content:
        ' 겨울은 새벽녘. 눈이 내리면 더없이 좋고, 서리가 하얗게 내린 것도 멋있다. 아주 추운 날 급하게 피운 숯을 들고 지나가는 모습은 그 나름대로 겨울에 어울리는 풍경이다. 이때 숯을 뜨겁게 피우지 않으면 화로 속이 금방 흰 재로 변해 버려 좋지 않다',
      star: 2,
      images: [
        'https://images.unsplash.com/photo-1444084316824-dc26d6657664?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      ],
      location: {
        latitude: 132.43,
        longitude: 82.102,
      },
    },
    {
      id: '5',
      title: '마카롱 카페에서 휴식',
      category: '카페',
      tags: [
        {
          id: 2,
          name: '디저트',
          color: 'FF00FF',
        },
      ],
      visitedAt: '2023-07-15',
      content:
        '가을은 해 질 녘. 석양이 비추고 산봉우리가 가깝게 보일 때 까마귀가 둥지를 향해 세 마리나 네 마리, 아니면 두 마리씩 떼 지어 날아가는 모습에 가슴이 뭉클해진다. 기러기가 줄지어 저 멀리로 날아가는 광경은 한층 더 정취 있다. 해가 진 후 바람 소리나 벌레 소리가 들려오는 것도 기분 좋다.',
      star: 3,
      images: [
        'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2094&q=80',
      ],
      location: {
        latitude: 132.43,
        longitude: 82.102,
      },
    },

    {
      id: '6',
      title: '마카롱 카페에서 휴식',
      category: '카페',
      tags: [
        {
          id: 2,
          name: '디저트',
          color: 'FF00FF',
        },
      ],
      visitedAt: '2023-07-15',
      star: 3,
      images: ['a1s2d3f4g5.png'],
      location: {
        latitude: 132.43,
        longitude: 82.102,
      },
    },
    {
      id: '7',
      title: '얌샘김밥 갔다온 건에 대하여5..',
      category: '여행',
      tags: [
        {
          id: 1,
          name: '분식',
          color: '000FFF',
        },
      ],
      visitedAt: '2023-07-14',
      content:
        '봄은 동틀 무렵. 산 능선이 점점 하얗게 변하면서 조금씩 밝아지고, 그 위로 보랏빛 구름이 가늘게 떠 있는 풍경이 멋있다. 여름은 밤. 달이 뜨면 더할 나위 없이 좋고, 칠흑같이 어두운 밤에도 반딧불이가 반짝반짝 여기저기에서 날아다니는 광경이 근사하다. 반딧불이가 한 마리나 두 마리 희미하게 빛을 내며 지나가는 것도 운치 있다. 비 오는 밤도 좋다. 가을은 해 질 녘. 석양이 비추고 산봉우리가 가깝게 보일 때 까마귀가 둥지를 향해 세 마리나 네 마리, 아니면 두 마리씩 떼 지어 날아가는 모습에 가슴이 뭉클해진다. 기러기가 줄지어 저 멀리로 날아가는 광경은 한층 더 정취 있다. 해가 진 후 바람 소리나 벌레 소리가 들려오는 것도 기분 좋다. 겨울은 새벽녘. 눈이 내리면 더없이 좋고, 서리가 하얗게 내린 것도 멋있다. 아주 추운 날 급하게 피운 숯을 들고 지나가는 모습은 그 나름대로 겨울에 어울리는 풍경이다. 이때 숯을 뜨겁게 피우지 않으면 화로 속이 금방 흰 재로 변해 버려 좋지 않다',
      star: 1,
      images: [
        'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
      ],
      location: {
        latitude: 132.32,
        longitude: 82.2123,
      },
    },
    {
      id: '8',
      title: '얌샘김밥 갔다온 건에 대하여6..',
      category: '음식점',
      tags: [
        {
          id: 1,
          name: '분식',
          color: '000FFF',
        },
      ],
      visitedAt: '2023-07-14',
      content:
        '최고의 시간이었고, 최악의 시간이었다. 지혜의 시대였고, 어리석음의 시대였다. 믿음의 세기였고, 불신의 세기였다. 빛의 계절이었고, 어둠의 계절이었다. 희망의 봄이었고, 절망의 겨울이었다. 우리 앞에 모든 것이 있었고, 우리 앞에 아무것도 없었다',
      star: 1,
      images: [
        'https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
      ],
      location: {
        latitude: 132.32,
        longitude: 82.2123,
      },
    },
    {
      id: '9',
      title: '마카롱 카페에서 휴식',
      category: '카페',
      tags: [
        {
          id: 2,
          name: '디저트',
          color: 'FF00FF',
        },
      ],
      visitedAt: '2023-07-15',
      content:
        '그래서 우리는 계속 앞으로 나아가는 것이다. 흐름을 거슬러가는 조각배처럼, 끊임없이 과거로 떠밀려가면서도.',
      star: 3,
      images: [
        'https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2156&q=80',
      ],
      location: {
        latitude: 132.43,
        longitude: 82.102,
      },
    },
    {
      id: '10',
      title: '마카롱 카페에서 휴식',
      category: '카페',
      tags: [
        {
          id: 2,
          name: '디저트',
          color: 'FF00FF',
        },
      ],
      visitedAt: '2023-07-15',
      star: 3,
      images: [
        'https://images.unsplash.com/photo-1444084316824-dc26d6657664?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      ],
      location: {
        latitude: 132.43,
        longitude: 82.102,
      },
    },
    {
      id: '11',
      title: '마카롱 카페에서 휴식',
      category: '카페',
      tags: [
        {
          id: 2,
          name: '디저트',
          color: 'FF00FF',
        },
      ],
      visitedAt: '2023-07-15',
      star: 3,
      images: [
        'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2094&q=80',
      ],
      location: {
        latitude: 132.43,
        longitude: 82.102,
      },
    },

    {
      id: '12',
      title: '마카롱 카페에서 휴식',
      category: '카페',
      tags: [
        {
          id: 2,
          name: '디저트',
          color: 'FF00FF',
        },
      ],
      visitedAt: '2023-07-15',
      star: 3,
      images: ['a1s2d3f4g5.png'],
      location: {
        latitude: 132.43,
        longitude: 82.102,
      },
    },
    {
      id: '13',
      title: '얌샘김밥 갔다온 건에 대하여..',
      category: '여행',
      tags: [
        {
          id: 1,
          name: '분식',
          color: '000FFF',
        },
      ],
      visitedAt: '2023-07-14',
      content:
        '봄은 동틀 무렵. 산 능선이 점점 하얗게 변하면서 조금씩 밝아지고, 그 위로 보랏빛 구름이 가늘게 떠 있는 풍경이 멋있다. 여름은 밤. 달이 뜨면 더할 나위 없이 좋고, 칠흑같이 어두운 밤에도 반딧불이가 반짝반짝 여기저기에서 날아다니는 광경이 근사하다. 반딧불이가 한 마리나 두 마리 희미하게 빛을 내며 지나가는 것도 운치 있다. 비 오는 밤도 좋다. 가을은 해 질 녘. 석양이 비추고 산봉우리가 가깝게 보일 때 까마귀가 둥지를 향해 세 마리나 네 마리, 아니면 두 마리씩 떼 지어 날아가는 모습에 가슴이 뭉클해진다. 기러기가 줄지어 저 멀리로 날아가는 광경은 한층 더 정취 있다. 해가 진 후 바람 소리나 벌레 소리가 들려오는 것도 기분 좋다. 겨울은 새벽녘. 눈이 내리면 더없이 좋고, 서리가 하얗게 내린 것도 멋있다. 아주 추운 날 급하게 피운 숯을 들고 지나가는 모습은 그 나름대로 겨울에 어울리는 풍경이다. 이때 숯을 뜨겁게 피우지 않으면 화로 속이 금방 흰 재로 변해 버려 좋지 않다',
      star: 1,
      images: [
        'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
      ],
      location: {
        latitude: 132.32,
        longitude: 82.2123,
      },
    },
    {
      id: '14',
      title: '얌샘김밥 갔다온 건에 대하여2..',
      category: '음식점',
      tags: [
        {
          id: 1,
          name: '분식',
          color: '000FFF',
        },
      ],
      visitedAt: '2023-07-14',
      content:
        '최고의 시간이었고, 최악의 시간이었다. 지혜의 시대였고, 어리석음의 시대였다. 믿음의 세기였고, 불신의 세기였다. 빛의 계절이었고, 어둠의 계절이었다. 희망의 봄이었고, 절망의 겨울이었다. 우리 앞에 모든 것이 있었고, 우리 앞에 아무것도 없었다',
      star: 1,
      images: [
        'https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
      ],
      location: {
        latitude: 132.32,
        longitude: 82.2123,
      },
    },
    {
      id: '15',
      title: '마카롱 카페에서 휴식',
      category: '카페',
      tags: [
        {
          id: 2,
          name: '디저트',
          color: 'FF00FF',
        },
      ],
      visitedAt: '2023-07-15',
      content:
        '그래서 우리는 계속 앞으로 나아가는 것이다. 흐름을 거슬러가는 조각배처럼, 끊임없이 과거로 떠밀려가면서도.',
      star: 3,
      images: [
        'https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2156&q=80',
      ],
      location: {
        latitude: 132.43,
        longitude: 82.102,
      },
    },
    {
      id: '16',
      title: '마카롱 카페에서 휴식',
      category: '카페',
      tags: [
        {
          id: 2,
          name: '디저트',
          color: 'FF00FF',
        },
      ],
      visitedAt: '2023-07-15',
      star: 3,
      images: [
        'https://images.unsplash.com/photo-1444084316824-dc26d6657664?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      ],
      location: {
        latitude: 132.43,
        longitude: 82.102,
      },
    },
    {
      id: '17',
      title: '마카롱 카페에서 휴식',
      category: '카페',
      tags: [
        {
          id: 2,
          name: '디저트',
          color: 'FF00FF',
        },
      ],
      visitedAt: '2023-07-15',
      star: 3,
      images: [
        'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2094&q=80',
      ],
      location: {
        latitude: 132.43,
        longitude: 82.102,
      },
    },

    {
      id: '18',
      title: '마카롱 카페에서 휴식',
      category: '카페',
      tags: [
        {
          id: 2,
          name: '디저트',
          color: 'FF00FF',
        },
      ],
      visitedAt: '2023-07-15',
      star: 3,
      images: ['a1s2d3f4g5.png'],
      location: {
        latitude: 132.43,
        longitude: 82.102,
      },
    },
    {
      id: '19',
      title: '얌샘김밥 갔다온 건에 대하여12..',
      category: '여행',
      tags: [
        {
          id: 1,
          name: '분식',
          color: '000FFF',
        },
      ],
      visitedAt: '2023-07-14',
      content:
        '봄은 동틀 무렵. 산 능선이 점점 하얗게 변하면서 조금씩 밝아지고, 그 위로 보랏빛 구름이 가늘게 떠 있는 풍경이 멋있다. 여름은 밤. 달이 뜨면 더할 나위 없이 좋고, 칠흑같이 어두운 밤에도 반딧불이가 반짝반짝 여기저기에서 날아다니는 광경이 근사하다. 반딧불이가 한 마리나 두 마리 희미하게 빛을 내며 지나가는 것도 운치 있다. 비 오는 밤도 좋다. 가을은 해 질 녘. 석양이 비추고 산봉우리가 가깝게 보일 때 까마귀가 둥지를 향해 세 마리나 네 마리, 아니면 두 마리씩 떼 지어 날아가는 모습에 가슴이 뭉클해진다. 기러기가 줄지어 저 멀리로 날아가는 광경은 한층 더 정취 있다. 해가 진 후 바람 소리나 벌레 소리가 들려오는 것도 기분 좋다. 겨울은 새벽녘. 눈이 내리면 더없이 좋고, 서리가 하얗게 내린 것도 멋있다. 아주 추운 날 급하게 피운 숯을 들고 지나가는 모습은 그 나름대로 겨울에 어울리는 풍경이다. 이때 숯을 뜨겁게 피우지 않으면 화로 속이 금방 흰 재로 변해 버려 좋지 않다',
      star: 1,
      images: [
        'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
      ],
      location: {
        latitude: 132.32,
        longitude: 82.2123,
      },
    },
    {
      id: '20',
      title: '얌샘김밥 갔다온 건에 대하여..',
      category: '여행',
      tags: [
        {
          id: 1,
          name: '분식',
          color: '000FFF',
        },
      ],
      visitedAt: '2023-07-14',
      content:
        '봄은 동틀 무렵. 산 능선이 점점 하얗게 변하면서 조금씩 밝아지고, 그 위로 보랏빛 구름이 가늘게 떠 있는 풍경이 멋있다. 여름은 밤. 달이 뜨면 더할 나위 없이 좋고, 칠흑같이 어두운 밤에도 반딧불이가 반짝반짝 여기저기에서 날아다니는 광경이 근사하다. 반딧불이가 한 마리나 두 마리 희미하게 빛을 내며 지나가는 것도 운치 있다. 비 오는 밤도 좋다. 가을은 해 질 녘. 석양이 비추고 산봉우리가 가깝게 보일 때 까마귀가 둥지를 향해 세 마리나 네 마리, 아니면 두 마리씩 떼 지어 날아가는 모습에 가슴이 뭉클해진다. 기러기가 줄지어 저 멀리로 날아가는 광경은 한층 더 정취 있다. 해가 진 후 바람 소리나 벌레 소리가 들려오는 것도 기분 좋다. 겨울은 새벽녘. 눈이 내리면 더없이 좋고, 서리가 하얗게 내린 것도 멋있다. 아주 추운 날 급하게 피운 숯을 들고 지나가는 모습은 그 나름대로 겨울에 어울리는 풍경이다. 이때 숯을 뜨겁게 피우지 않으면 화로 속이 금방 흰 재로 변해 버려 좋지 않다',
      star: 1,
      images: [
        'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
      ],
      location: {
        latitude: 132.32,
        longitude: 82.2123,
      },
    },
    {
      id: '21',
      title: '얌샘김밥 갔다온 건에 대하여2..',
      category: '음식점',
      tags: [
        {
          id: 1,
          name: '분식',
          color: '000FFF',
        },
      ],
      visitedAt: '2023-07-14',
      content:
        '최고의 시간이었고, 최악의 시간이었다. 지혜의 시대였고, 어리석음의 시대였다. 믿음의 세기였고, 불신의 세기였다. 빛의 계절이었고, 어둠의 계절이었다. 희망의 봄이었고, 절망의 겨울이었다. 우리 앞에 모든 것이 있었고, 우리 앞에 아무것도 없었다',
      star: 1,
      images: [
        'https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
      ],
      location: {
        latitude: 132.32,
        longitude: 82.2123,
      },
    },
    {
      id: '22',
      title: '마카롱 카페에서 휴식',
      category: '카페',
      tags: [
        {
          id: 2,
          name: '디저트',
          color: 'FF00FF',
        },
      ],
      visitedAt: '2023-07-15',
      content:
        '그래서 우리는 계속 앞으로 나아가는 것이다. 흐름을 거슬러가는 조각배처럼, 끊임없이 과거로 떠밀려가면서도.',
      star: 3,
      images: [
        'https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2156&q=80',
      ],
      location: {
        latitude: 132.43,
        longitude: 82.102,
      },
    },
    {
      id: '23',
      title: '마카롱 카페에서 휴식',
      category: '카페',
      tags: [
        {
          id: 2,
          name: '디저트',
          color: 'FF00FF',
        },
      ],
      visitedAt: '2023-07-15',
      star: 3,
      images: [
        'https://images.unsplash.com/photo-1444084316824-dc26d6657664?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      ],
      location: {
        latitude: 132.43,
        longitude: 82.102,
      },
    },
    {
      id: '24',
      title: '마카롱 카페에서 휴식',
      category: '카페',
      tags: [
        {
          id: 2,
          name: '디저트',
          color: 'FF00FF',
        },
      ],
      visitedAt: '2023-07-15',
      star: 3,
      images: [
        'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2094&q=80',
      ],
      location: {
        latitude: 132.43,
        longitude: 82.102,
      },
    },

    {
      id: '25',
      title: '마카롱 카페에서 휴식',
      category: '카페',
      tags: [
        {
          id: 2,
          name: '디저트',
          color: 'FF00FF',
        },
      ],
      visitedAt: '2023-07-15',
      star: 3,
      images: ['a1s2d3f4g5.png'],
      location: {
        latitude: 132.43,
        longitude: 82.102,
      },
    },
    {
      id: '26',
      title: '얌샘김밥 갔다온 건에 대하여5..',
      category: '여행',
      tags: [
        {
          id: 1,
          name: '분식',
          color: '000FFF',
        },
      ],
      visitedAt: '2023-07-14',
      content:
        '봄은 동틀 무렵. 산 능선이 점점 하얗게 변하면서 조금씩 밝아지고, 그 위로 보랏빛 구름이 가늘게 떠 있는 풍경이 멋있다. 여름은 밤. 달이 뜨면 더할 나위 없이 좋고, 칠흑같이 어두운 밤에도 반딧불이가 반짝반짝 여기저기에서 날아다니는 광경이 근사하다. 반딧불이가 한 마리나 두 마리 희미하게 빛을 내며 지나가는 것도 운치 있다. 비 오는 밤도 좋다. 가을은 해 질 녘. 석양이 비추고 산봉우리가 가깝게 보일 때 까마귀가 둥지를 향해 세 마리나 네 마리, 아니면 두 마리씩 떼 지어 날아가는 모습에 가슴이 뭉클해진다. 기러기가 줄지어 저 멀리로 날아가는 광경은 한층 더 정취 있다. 해가 진 후 바람 소리나 벌레 소리가 들려오는 것도 기분 좋다. 겨울은 새벽녘. 눈이 내리면 더없이 좋고, 서리가 하얗게 내린 것도 멋있다. 아주 추운 날 급하게 피운 숯을 들고 지나가는 모습은 그 나름대로 겨울에 어울리는 풍경이다. 이때 숯을 뜨겁게 피우지 않으면 화로 속이 금방 흰 재로 변해 버려 좋지 않다',
      star: 1,
      images: [
        'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
      ],
      location: {
        latitude: 132.32,
        longitude: 82.2123,
      },
    },
    {
      id: '27',
      title: '얌샘김밥 갔다온 건에 대하여6..',
      category: '음식점',
      tags: [
        {
          id: 1,
          name: '분식',
          color: '000FFF',
        },
      ],
      visitedAt: '2023-07-14',
      content:
        '최고의 시간이었고, 최악의 시간이었다. 지혜의 시대였고, 어리석음의 시대였다. 믿음의 세기였고, 불신의 세기였다. 빛의 계절이었고, 어둠의 계절이었다. 희망의 봄이었고, 절망의 겨울이었다. 우리 앞에 모든 것이 있었고, 우리 앞에 아무것도 없었다',
      star: 1,
      images: [
        'https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
      ],
      location: {
        latitude: 132.32,
        longitude: 82.2123,
      },
    },
    {
      id: '28',
      title: '마카롱 카페에서 휴식',
      category: '카페',
      tags: [
        {
          id: 2,
          name: '디저트',
          color: 'FF00FF',
        },
      ],
      visitedAt: '2023-07-15',
      content:
        '그래서 우리는 계속 앞으로 나아가는 것이다. 흐름을 거슬러가는 조각배처럼, 끊임없이 과거로 떠밀려가면서도.',
      star: 3,
      images: [
        'https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2156&q=80',
      ],
      location: {
        latitude: 132.43,
        longitude: 82.102,
      },
    },
    {
      id: '29',
      title: '마카롱 카페에서 휴식',
      category: '카페',
      tags: [
        {
          id: 2,
          name: '디저트',
          color: 'FF00FF',
        },
      ],
      visitedAt: '2023-07-15',
      star: 3,
      images: [
        'https://images.unsplash.com/photo-1444084316824-dc26d6657664?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      ],
      location: {
        latitude: 132.43,
        longitude: 82.102,
      },
    },
    {
      id: '30',
      title: '마지막 마카롱 카페에서 휴식',
      category: '카페',
      tags: [
        {
          id: 2,
          name: '디저트',
          color: 'FF00FF',
        },
      ],
      visitedAt: '2023-07-15',
      star: 3,
      images: [
        'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2094&q=80',
      ],
      location: {
        latitude: 132.43,
        longitude: 82.102,
      },
    },
  ],
  pageSize: 10,
};

module.exports = mockData;
