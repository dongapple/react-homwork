# 리액트 프로그래밍 과제

## 로그인 버튼 만들기

- 피그마 이미지 구현
  ![image](https://github.com/dongapple/react-homwork/assets/74224516/ca6de308-b8a0-47ec-9286-a0d59b186869)

## 주요 코드

- JSX

```jsx
function LoginButton(props) {
  const [status, setStatus] = useState('ready');

  const handleClick = () => {
    setStatus('clicked');
  };

  const handleMouseOver = () => {
    setStatus('hover');
  };

  const handleMouseOut = () => {
    setStatus('ready');
  };

  return (
    <button
      className={`${styles.loginbutton} ${styles[status]}`}
      type="submit"
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {props.label}
    </button>
  );
}
```

- CSS

```css
.loginbutton {
  border: none;
  border-radius: 5px;
  width: 170px;
  height: 40px;
  font-size: 18px;
  font-weight: 600;
}

.ready {
  background-color: #be3455;
  color: #fff;
}

.hover {
  background-color: #bf7486;
  color: #fff;
}

.clicked {
  background-color: #e3e3e3;
  color: #be3455;
}
```

![로그인 구현 영상](https://github.com/dongapple/react-homwork/assets/74224516/c318dd37-3b8e-43b9-b0d3-67bbdb02abe0)
