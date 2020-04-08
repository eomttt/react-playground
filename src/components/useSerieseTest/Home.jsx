import React, { useState, useEffect, useCallback, useMemo } from 'react';

// deps 에 값을 넣어주지 않아도 deps 에 값이 바뀌면 새로운 값들을 반환한다.
// wowfunc, wow 는 yy 가 deps 에 없기 때문에 
// test1 버튼을 클릭하여 yy를 증가 시켜 주었을 때에
// 그대로의 값을 유지하고 yoyo 의 값이 바뀌게 되면 그때의 yy값을 참조하여 새로운 값을 반환한다.
// 즉, useCallback, useMemo 에서 참조하고 있는 값들은 deps 에 값이 바뀌면 다시 새롭게 참조하게 된다.
// 주욱 유지하는것이 아니다.

// test 버튼 역시 계속 누르면 yoyo값만 바뀐다.
// 하지만 test1 버튼을 눌러서 yy 를 변경시켜준다. 그 후 다시 test 버튼을 누르면 처음엔 yy는 바뀌기 전 값이다.
// 하지만 다시 누르면 test1 을 눌러서 바뀐 yy가 된다.
// 이유는 yoyo 가 바뀌었기 때문에 새로운 함수가 만들어지고 새로운 yy를 참조하기 때문이다.

const Home = () => {
  const [yoyo, setYoyo] = useState([0, 1]);
  const [yy, setYY] = useState([0, 1, 2]);

  useEffect(() => {
    console.log('yoyo wow', wow);
    console.log('yoyo wowfunc', wowfunc());
    
    console.log('yoyo effect', [...yy]);
  }, [yoyo]);

  useEffect(() => {
    console.log('yy wow', wow);
    console.log('yy wowfunc', wowfunc());
    
    console.log('yy effect', [...yy]);
  }, [yy]);

  const wowfunc = useCallback(() => {
    return [...yy];
  }, [yoyo]);
  const wow = useMemo(() => {
    return [...yy];
  }, [yoyo]);

  const test = useCallback(() => {
    console.log('test yoyo', yoyo);
    console.log('test yy', yy);
    setYoyo([...yoyo, yoyo.length]);
  }, [yoyo]);

  const test1 = useCallback(() => {
    console.log('test1 yy', yy);
    console.log('test1 yoyo', yoyo);
    setYY([...yy, yy.length]);
  }, [yy]);

  return (
    <>
    <button onClick={test}>TEST</button>
    <button onClick={test1}>TEST1</button>
    </>
  )
}

export default Home