import './App.css';
import Click from './component/Click';

// App.tsx or App.js

function App() {
  const handleClick = () => {
    console.log("CLICK")
    window.location.href = 'https://www.google.com';
  };
  return (
    <div style={{ display: 'flex',flexDirection:'column', gap: '16px', padding: '16px',width:'400px' }}>
      <Click onClick={handleClick}>
        <div style={{display:'flex', justifyContent:'space-between',width:'100%'}}>
          <Click.Date>2022.11.23</Click.Date>
          <Click.Button>버튼</Click.Button>
        </div>
        <Click.Heading>강원도에서의 겨울</Click.Heading>
        <Click.Description>
          국경의 긴 터널을 빠져나오자, 설국이었다.
          밤의 아랫쪽이 하얘졌다. 신호소에 기차가 멈춰 섰다.
          건너편 좌석의 여자가 일어서 다가오더니, 시마무라 앞의 유리창을 열어젖혔다.
          눈의 냉기가 흘러들었다.
          여자는 한껏 창 밖으로 몸을 내밀어 멀리 외치는 듯이,
          "역장니임, 역장니임ー"
          등불을 들고 천천히 눈을 밟고 온 남자는 목도리를 콧등까지 두르고, 귀에 모자의 모피를 드리우고 있었다.
        </Click.Description>
        <Click.Image type="background" src="https://picsum.photos/200/300" alt="random" />
      </Click>
      
      <Click onClick={handleClick}>
        <div style={{display:'flex', justifyContent:'space-between',width:'100%'}}>
          <Click.Date>2023.07.23</Click.Date>
          <Click.Button>버튼</Click.Button>
        </div>
        <Click.Heading>강원도에서의 여름</Click.Heading>
        <Click.Description>
          국경의 긴 터널을 빠져나오자, 설국이었다.
          밤의 아랫쪽이 하얘졌다. 신호소에 기차가 멈춰 섰다.
          건너편 좌석의 여자가 일어서 다가오더니, 시마무라 앞의 유리창을 열어젖혔다.
          눈의 냉기가 흘러들었다.
          여자는 한껏 창 밖으로 몸을 내밀어 멀리 외치는 듯이,
          "역장니임, 역장니임ー"
          등불을 들고 천천히 눈을 밟고 온 남자는 목도리를 콧등까지 두르고, 귀에 모자의 모피를 드리우고 있었다.
        </Click.Description>
        <Click.Image type="background" src="https://picsum.photos/200/300" alt="random" />
      </Click>

      <Click onClick={handleClick}>
        <div style={{display:'flex', justifyContent:'space-between',width:'100%'}}>
          <Click.Date>2023.07.23</Click.Date>
          <Click.Button>버튼</Click.Button>
        </div>
        <Click.Heading>강원도에서의 여름</Click.Heading>
        <Click.Description>
          국경의 긴 터널을 빠져나오자, 설국이었다.
          밤의 아랫쪽이 하얘졌다. 신호소에 기차가 멈춰 섰다.
          건너편 좌석의 여자가 일어서 다가오더니, 시마무라 앞의 유리창을 열어젖혔다.
          눈의 냉기가 흘러들었다.
          여자는 한껏 창 밖으로 몸을 내밀어 멀리 외치는 듯이,
          "역장니임, 역장니임ー"
          등불을 들고 천천히 눈을 밟고 온 남자는 목도리를 콧등까지 두르고, 귀에 모자의 모피를 드리우고 있었다.
        </Click.Description>
        <Click.Image type="background" src="https://picsum.photos/200/300" alt="random" />
      </Click>

      <Click onClick={handleClick}>
        <div style={{display:'flex', justifyContent:'space-between',width:'100%'}}>
          <Click.Date>2023.07.23</Click.Date>
          <Click.Button>버튼</Click.Button>
        </div>
        <Click.Heading>강원도에서의 여름</Click.Heading>
        <Click.Description>
          국경의 긴 터널을 빠져나오자, 설국이었다.
          밤의 아랫쪽이 하얘졌다. 신호소에 기차가 멈춰 섰다.
          건너편 좌석의 여자가 일어서 다가오더니, 시마무라 앞의 유리창을 열어젖혔다.
          눈의 냉기가 흘러들었다.
          여자는 한껏 창 밖으로 몸을 내밀어 멀리 외치는 듯이,
          "역장니임, 역장니임ー"
          등불을 들고 천천히 눈을 밟고 온 남자는 목도리를 콧등까지 두르고, 귀에 모자의 모피를 드리우고 있었다.
        </Click.Description>
        <Click.Image type="background" src="https://picsum.photos/200/300" alt="random" />
      </Click>

      <Click onClick={handleClick}>
        <div style={{display:'flex', justifyContent:'space-between',width:'100%'}}>
          <Click.Date>2023.07.23</Click.Date>
          <Click.Button>버튼</Click.Button>
        </div>
        <Click.Heading>강원도에서의 여름</Click.Heading>
        <Click.Description>
          국경의 긴 터널을 빠져나오자, 설국이었다.
          밤의 아랫쪽이 하얘졌다. 신호소에 기차가 멈춰 섰다.
          건너편 좌석의 여자가 일어서 다가오더니, 시마무라 앞의 유리창을 열어젖혔다.
          눈의 냉기가 흘러들었다.
          여자는 한껏 창 밖으로 몸을 내밀어 멀리 외치는 듯이,
          "역장니임, 역장니임ー"
          등불을 들고 천천히 눈을 밟고 온 남자는 목도리를 콧등까지 두르고, 귀에 모자의 모피를 드리우고 있었다.
        </Click.Description>
        <Click.Image type="background" src="https://picsum.photos/200/300" alt="random" />
      </Click>

      <Click onClick={handleClick}>
        <div style={{display:'flex', justifyContent:'space-between',width:'100%'}}>
          <Click.Date>2023.07.23</Click.Date>
          <Click.Button>버튼</Click.Button>
        </div>
        <Click.Heading>강원도에서의 여름</Click.Heading>
        <Click.Description>
          국경의 긴 터널을 빠져나오자, 설국이었다.
          밤의 아랫쪽이 하얘졌다. 신호소에 기차가 멈춰 섰다.
          건너편 좌석의 여자가 일어서 다가오더니, 시마무라 앞의 유리창을 열어젖혔다.
          눈의 냉기가 흘러들었다.
          여자는 한껏 창 밖으로 몸을 내밀어 멀리 외치는 듯이,
          "역장니임, 역장니임ー"
          등불을 들고 천천히 눈을 밟고 온 남자는 목도리를 콧등까지 두르고, 귀에 모자의 모피를 드리우고 있었다.
        </Click.Description>
        <Click.Image type="background" src="https://picsum.photos/200/300" alt="random" />
      </Click>

      <Click onClick={handleClick}>
        <div style={{display:'flex', justifyContent:'space-between',width:'100%'}}>
          <Click.Date>2023.07.23</Click.Date>
          <Click.Button>버튼</Click.Button>
        </div>
        <Click.Heading>강원도에서의 여름</Click.Heading>
        <Click.Description>
          국경의 긴 터널을 빠져나오자, 설국이었다.
          밤의 아랫쪽이 하얘졌다. 신호소에 기차가 멈춰 섰다.
          건너편 좌석의 여자가 일어서 다가오더니, 시마무라 앞의 유리창을 열어젖혔다.
          눈의 냉기가 흘러들었다.
          여자는 한껏 창 밖으로 몸을 내밀어 멀리 외치는 듯이,
          "역장니임, 역장니임ー"
          등불을 들고 천천히 눈을 밟고 온 남자는 목도리를 콧등까지 두르고, 귀에 모자의 모피를 드리우고 있었다.
        </Click.Description>
        <Click.Image type="background" src="https://picsum.photos/200/300" alt="random" />
      </Click>

      <Click onClick={handleClick}>
        <div style={{display:'flex', justifyContent:'space-between',width:'100%'}}>
          <Click.Date>2023.07.23</Click.Date>
          <Click.Button>버튼</Click.Button>
        </div>
        <Click.Heading>강원도에서의 여름</Click.Heading>
        <Click.Description>
          국경의 긴 터널을 빠져나오자, 설국이었다.
          밤의 아랫쪽이 하얘졌다. 신호소에 기차가 멈춰 섰다.
          건너편 좌석의 여자가 일어서 다가오더니, 시마무라 앞의 유리창을 열어젖혔다.
          눈의 냉기가 흘러들었다.
          여자는 한껏 창 밖으로 몸을 내밀어 멀리 외치는 듯이,
          "역장니임, 역장니임ー"
          등불을 들고 천천히 눈을 밟고 온 남자는 목도리를 콧등까지 두르고, 귀에 모자의 모피를 드리우고 있었다.
        </Click.Description>
        <Click.Image type="background" src="https://picsum.photos/200/300" alt="random" />
      </Click>
      <Click onClick={handleClick}>
        <div style={{display:'flex', justifyContent:'space-between',width:'100%'}}>
          <Click.Date>2023.07.23</Click.Date>
          <Click.Button>버튼</Click.Button>
        </div>
        <Click.Heading>강원도에서의 여름</Click.Heading>
        <Click.Description>
          국경의 긴 터널을 빠져나오자, 설국이었다.
          밤의 아랫쪽이 하얘졌다. 신호소에 기차가 멈춰 섰다.
          건너편 좌석의 여자가 일어서 다가오더니, 시마무라 앞의 유리창을 열어젖혔다.
          눈의 냉기가 흘러들었다.
          여자는 한껏 창 밖으로 몸을 내밀어 멀리 외치는 듯이,
          "역장니임, 역장니임ー"
          등불을 들고 천천히 눈을 밟고 온 남자는 목도리를 콧등까지 두르고, 귀에 모자의 모피를 드리우고 있었다.
        </Click.Description>
        <Click.Image type="background" src="https://picsum.photos/200/300" alt="random" />
      </Click>
      <Click onClick={handleClick}>
        <div style={{display:'flex', justifyContent:'space-between',width:'100%'}}>
          <Click.Date>2023.07.23</Click.Date>
          <Click.Button>버튼</Click.Button>
        </div>
        <Click.Heading>강원도에서의 여름</Click.Heading>
        <Click.Description>
          국경의 긴 터널을 빠져나오자, 설국이었다.
          밤의 아랫쪽이 하얘졌다. 신호소에 기차가 멈춰 섰다.
          건너편 좌석의 여자가 일어서 다가오더니, 시마무라 앞의 유리창을 열어젖혔다.
          눈의 냉기가 흘러들었다.
          여자는 한껏 창 밖으로 몸을 내밀어 멀리 외치는 듯이,
          "역장니임, 역장니임ー"
          등불을 들고 천천히 눈을 밟고 온 남자는 목도리를 콧등까지 두르고, 귀에 모자의 모피를 드리우고 있었다.
        </Click.Description>
        <Click.Image type="background" src="https://picsum.photos/200/300" alt="random" />
      </Click>
      <Click onClick={handleClick}>
        <div style={{display:'flex', justifyContent:'space-between',width:'100%'}}>
          <Click.Date>2023.07.23</Click.Date>
          <Click.Button>버튼</Click.Button>
        </div>
        <Click.Heading>강원도에서의 여름</Click.Heading>
        <Click.Description>
          국경의 긴 터널을 빠져나오자, 설국이었다.
          밤의 아랫쪽이 하얘졌다. 신호소에 기차가 멈춰 섰다.
          건너편 좌석의 여자가 일어서 다가오더니, 시마무라 앞의 유리창을 열어젖혔다.
          눈의 냉기가 흘러들었다.
          여자는 한껏 창 밖으로 몸을 내밀어 멀리 외치는 듯이,
          "역장니임, 역장니임ー"
          등불을 들고 천천히 눈을 밟고 온 남자는 목도리를 콧등까지 두르고, 귀에 모자의 모피를 드리우고 있었다.
        </Click.Description>
        <Click.Image type="background" src="https://picsum.photos/200/300" alt="random" />
      </Click>
      <Click onClick={handleClick}>
        <div style={{display:'flex', justifyContent:'space-between',width:'100%'}}>
          <Click.Date>2023.07.23</Click.Date>
          <Click.Button>버튼</Click.Button>
        </div>
        <Click.Heading>강원도에서의 여름</Click.Heading>
        <Click.Description>
          국경의 긴 터널을 빠져나오자, 설국이었다.
          밤의 아랫쪽이 하얘졌다. 신호소에 기차가 멈춰 섰다.
          건너편 좌석의 여자가 일어서 다가오더니, 시마무라 앞의 유리창을 열어젖혔다.
          눈의 냉기가 흘러들었다.
          여자는 한껏 창 밖으로 몸을 내밀어 멀리 외치는 듯이,
          "역장니임, 역장니임ー"
          등불을 들고 천천히 눈을 밟고 온 남자는 목도리를 콧등까지 두르고, 귀에 모자의 모피를 드리우고 있었다.
        </Click.Description>
        <Click.Image type="background" src="https://picsum.photos/200/300" alt="random" />
      </Click>
      <Click onClick={handleClick}>
        <div style={{display:'flex', justifyContent:'space-between',width:'100%'}}>
          <Click.Date>2023.07.23</Click.Date>
          <Click.Button>버튼</Click.Button>
        </div>
        <Click.Heading>강원도에서의 여름</Click.Heading>
        <Click.Description>
          국경의 긴 터널을 빠져나오자, 설국이었다.
          밤의 아랫쪽이 하얘졌다. 신호소에 기차가 멈춰 섰다.
          건너편 좌석의 여자가 일어서 다가오더니, 시마무라 앞의 유리창을 열어젖혔다.
          눈의 냉기가 흘러들었다.
          여자는 한껏 창 밖으로 몸을 내밀어 멀리 외치는 듯이,
          "역장니임, 역장니임ー"
          등불을 들고 천천히 눈을 밟고 온 남자는 목도리를 콧등까지 두르고, 귀에 모자의 모피를 드리우고 있었다.
        </Click.Description>
        <Click.Image type="background" src="https://picsum.photos/200/300" alt="random" />
      </Click>

      <Click onClick={handleClick}>
        <div style={{display:'flex', justifyContent:'space-between',width:'100%'}}>
          <Click.Date>2023.07.23</Click.Date>
          <Click.Button>버튼</Click.Button>
        </div>
        <Click.Heading>강원도에서의 여름</Click.Heading>
        <Click.Description>
          국경의 긴 터널을 빠져나오자, 설국이었다.
          밤의 아랫쪽이 하얘졌다. 신호소에 기차가 멈춰 섰다.
          건너편 좌석의 여자가 일어서 다가오더니, 시마무라 앞의 유리창을 열어젖혔다.
          눈의 냉기가 흘러들었다.
          여자는 한껏 창 밖으로 몸을 내밀어 멀리 외치는 듯이,
          "역장니임, 역장니임ー"
          등불을 들고 천천히 눈을 밟고 온 남자는 목도리를 콧등까지 두르고, 귀에 모자의 모피를 드리우고 있었다.
        </Click.Description>
        <Click.Image type="background" src="https://picsum.photos/200/300" alt="random" />
      </Click>
      <Click onClick={handleClick}>
        <div style={{display:'flex', justifyContent:'space-between',width:'100%'}}>
          <Click.Date>2023.07.23</Click.Date>
          <Click.Button>버튼</Click.Button>
        </div>
        <Click.Heading>강원도에서의 여름</Click.Heading>
        <Click.Description>
          국경의 긴 터널을 빠져나오자, 설국이었다.
          밤의 아랫쪽이 하얘졌다. 신호소에 기차가 멈춰 섰다.
          건너편 좌석의 여자가 일어서 다가오더니, 시마무라 앞의 유리창을 열어젖혔다.
          눈의 냉기가 흘러들었다.
          여자는 한껏 창 밖으로 몸을 내밀어 멀리 외치는 듯이,
          "역장니임, 역장니임ー"
          등불을 들고 천천히 눈을 밟고 온 남자는 목도리를 콧등까지 두르고, 귀에 모자의 모피를 드리우고 있었다.
        </Click.Description>
        <Click.Image type="background" src="https://picsum.photos/200/300" alt="random" />
      </Click>
      <Click onClick={handleClick}>
        <div style={{display:'flex', justifyContent:'space-between',width:'100%'}}>
          <Click.Date>2023.07.23</Click.Date>
          <Click.Button>버튼</Click.Button>
        </div>
        <Click.Heading>강원도에서의 여름</Click.Heading>
        <Click.Description>
          국경의 긴 터널을 빠져나오자, 설국이었다.
          밤의 아랫쪽이 하얘졌다. 신호소에 기차가 멈춰 섰다.
          건너편 좌석의 여자가 일어서 다가오더니, 시마무라 앞의 유리창을 열어젖혔다.
          눈의 냉기가 흘러들었다.
          여자는 한껏 창 밖으로 몸을 내밀어 멀리 외치는 듯이,
          "역장니임, 역장니임ー"
          등불을 들고 천천히 눈을 밟고 온 남자는 목도리를 콧등까지 두르고, 귀에 모자의 모피를 드리우고 있었다.
        </Click.Description>
        <Click.Image type="background" src="https://picsum.photos/200/300" alt="random" />
      </Click>
      <Click onClick={handleClick}>
        <div style={{display:'flex', justifyContent:'space-between',width:'100%'}}>
          <Click.Date>2023.07.23</Click.Date>
          <Click.Button>버튼</Click.Button>
        </div>
        <Click.Heading>강원도에서의 여름</Click.Heading>
        <Click.Description>
          국경의 긴 터널을 빠져나오자, 설국이었다.
          밤의 아랫쪽이 하얘졌다. 신호소에 기차가 멈춰 섰다.
          건너편 좌석의 여자가 일어서 다가오더니, 시마무라 앞의 유리창을 열어젖혔다.
          눈의 냉기가 흘러들었다.
          여자는 한껏 창 밖으로 몸을 내밀어 멀리 외치는 듯이,
          "역장니임, 역장니임ー"
          등불을 들고 천천히 눈을 밟고 온 남자는 목도리를 콧등까지 두르고, 귀에 모자의 모피를 드리우고 있었다.
        </Click.Description>
        <Click.Image type="background" src="https://picsum.photos/200/300" alt="random" />
      </Click>
      <Click onClick={handleClick}>
        <div style={{display:'flex', justifyContent:'space-between',width:'100%'}}>
          <Click.Date>2023.07.23</Click.Date>
          <Click.Button>버튼</Click.Button>
        </div>
        <Click.Heading>강원도에서의 여름</Click.Heading>
        <Click.Description>
          국경의 긴 터널을 빠져나오자, 설국이었다.
          밤의 아랫쪽이 하얘졌다. 신호소에 기차가 멈춰 섰다.
          건너편 좌석의 여자가 일어서 다가오더니, 시마무라 앞의 유리창을 열어젖혔다.
          눈의 냉기가 흘러들었다.
          여자는 한껏 창 밖으로 몸을 내밀어 멀리 외치는 듯이,
          "역장니임, 역장니임ー"
          등불을 들고 천천히 눈을 밟고 온 남자는 목도리를 콧등까지 두르고, 귀에 모자의 모피를 드리우고 있었다.
        </Click.Description>
        <Click.Image type="background" src="https://picsum.photos/200/300" alt="random" />
      </Click>
      <Click onClick={handleClick}>
        <div style={{display:'flex', justifyContent:'space-between',width:'100%'}}>
          <Click.Date>2023.07.23</Click.Date>
          <Click.Button>버튼</Click.Button>
        </div>
        <Click.Heading>강원도에서의 여름</Click.Heading>
        <Click.Description>
          국경의 긴 터널을 빠져나오자, 설국이었다.
          밤의 아랫쪽이 하얘졌다. 신호소에 기차가 멈춰 섰다.
          건너편 좌석의 여자가 일어서 다가오더니, 시마무라 앞의 유리창을 열어젖혔다.
          눈의 냉기가 흘러들었다.
          여자는 한껏 창 밖으로 몸을 내밀어 멀리 외치는 듯이,
          "역장니임, 역장니임ー"
          등불을 들고 천천히 눈을 밟고 온 남자는 목도리를 콧등까지 두르고, 귀에 모자의 모피를 드리우고 있었다.
        </Click.Description>
        <Click.Image type="background" src="https://picsum.photos/200/300" alt="random" />
      </Click>
      <Click onClick={handleClick}>
        <div style={{display:'flex', justifyContent:'space-between',width:'100%'}}>
          <Click.Date>2023.07.23</Click.Date>
          <Click.Button>버튼</Click.Button>
        </div>
        <Click.Heading>강원도에서의 여름</Click.Heading>
        <Click.Description>
          국경의 긴 터널을 빠져나오자, 설국이었다.
          밤의 아랫쪽이 하얘졌다. 신호소에 기차가 멈춰 섰다.
          건너편 좌석의 여자가 일어서 다가오더니, 시마무라 앞의 유리창을 열어젖혔다.
          눈의 냉기가 흘러들었다.
          여자는 한껏 창 밖으로 몸을 내밀어 멀리 외치는 듯이,
          "역장니임, 역장니임ー"
          등불을 들고 천천히 눈을 밟고 온 남자는 목도리를 콧등까지 두르고, 귀에 모자의 모피를 드리우고 있었다.
        </Click.Description>
        <Click.Image type="background" src="https://picsum.photos/200/300" alt="random" />
      </Click>
      <Click onClick={handleClick}>
        <div style={{display:'flex', justifyContent:'space-between',width:'100%'}}>
          <Click.Date>2023.07.23</Click.Date>
          <Click.Button>버튼</Click.Button>
        </div>
        <Click.Heading>강원도에서의 여름</Click.Heading>
        <Click.Description>
          국경의 긴 터널을 빠져나오자, 설국이었다.
          밤의 아랫쪽이 하얘졌다. 신호소에 기차가 멈춰 섰다.
          건너편 좌석의 여자가 일어서 다가오더니, 시마무라 앞의 유리창을 열어젖혔다.
          눈의 냉기가 흘러들었다.
          여자는 한껏 창 밖으로 몸을 내밀어 멀리 외치는 듯이,
          "역장니임, 역장니임ー"
          등불을 들고 천천히 눈을 밟고 온 남자는 목도리를 콧등까지 두르고, 귀에 모자의 모피를 드리우고 있었다.
        </Click.Description>
        <Click.Image type="background" src="https://picsum.photos/200/300" alt="random" />
      </Click>
      <Click onClick={handleClick}>
        <div style={{display:'flex', justifyContent:'space-between',width:'100%'}}>
          <Click.Date>2023.07.23</Click.Date>
          <Click.Button>버튼</Click.Button>
        </div>
        <Click.Heading>강원도에서의 여름</Click.Heading>
        <Click.Description>
          국경의 긴 터널을 빠져나오자, 설국이었다.
          밤의 아랫쪽이 하얘졌다. 신호소에 기차가 멈춰 섰다.
          건너편 좌석의 여자가 일어서 다가오더니, 시마무라 앞의 유리창을 열어젖혔다.
          눈의 냉기가 흘러들었다.
          여자는 한껏 창 밖으로 몸을 내밀어 멀리 외치는 듯이,
          "역장니임, 역장니임ー"
          등불을 들고 천천히 눈을 밟고 온 남자는 목도리를 콧등까지 두르고, 귀에 모자의 모피를 드리우고 있었다.
        </Click.Description>
        <Click.Image type="background" src="https://picsum.photos/200/300" alt="random" />
      </Click>
      <Click onClick={handleClick}>
        <div style={{display:'flex', justifyContent:'space-between',width:'100%'}}>
          <Click.Date>2023.07.23</Click.Date>
          <Click.Button>버튼</Click.Button>
        </div>
        <Click.Heading>강원도에서의 여름</Click.Heading>
        <Click.Description>
          국경의 긴 터널을 빠져나오자, 설국이었다.
          밤의 아랫쪽이 하얘졌다. 신호소에 기차가 멈춰 섰다.
          건너편 좌석의 여자가 일어서 다가오더니, 시마무라 앞의 유리창을 열어젖혔다.
          눈의 냉기가 흘러들었다.
          여자는 한껏 창 밖으로 몸을 내밀어 멀리 외치는 듯이,
          "역장니임, 역장니임ー"
          등불을 들고 천천히 눈을 밟고 온 남자는 목도리를 콧등까지 두르고, 귀에 모자의 모피를 드리우고 있었다.
        </Click.Description>
        <Click.Image type="background" src="https://picsum.photos/200/300" alt="random" />
      </Click>
      
    </div>
  );
}
export default App;
