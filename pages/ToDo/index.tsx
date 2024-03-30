import type { RootState } from '../../src/store';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove, complete } from '../../src/components/toDoSlice';
import { useState } from 'react';
// 스타일드 컴포넌트 사용불가
// Could not find a declaration file for module 'styled-components'.
// ref: https://www.daleseo.com/react-styled-components/
// import styled from 'styled-components';

const ToDo = () => {
  const [toDoItem, setToDoItem] = useState('');
  const toDo = useSelector((state: RootState) => state.toDo);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>ToDo List</h1>
      <div style={{ position: 'relative', width: '100vw' }}>
        <div>
          <input value={toDoItem} onChange={(e) => setToDoItem(e.target.value)} />
          <button
            aria-label="Increment value"
            onClick={() => {
              if (toDoItem !== '') {
                dispatch(add(toDoItem));
                setToDoItem('');
              } else {
                alert('값을 입력해주세요');
              }
            }}
          >
            add
          </button>
        </div>

        <div>
          {toDo.map((item) => {
            if (item.id > 0) {
              return (
                <div key={item.id} style={{ display: 'flex', margin: '5px' }}>
                  <div style={{ marginRight: '2px' }}>{item.id}</div>
                  <div style={{ marginRight: '2px' }}>{item.value}</div>
                  <div style={{ marginRight: '2px' }}>{item.createDate}</div>
                  <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(remove(item.id))}
                    style={{ marginRight: '2px' }}
                  >
                    remove
                  </button>
                  <button onClick={() => dispatch(complete(item.id))} style={{ marginRight: '2px' }}>
                    complete
                  </button>
                  <input type="checkbox" checked={item.complete} readOnly />
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default ToDo;
