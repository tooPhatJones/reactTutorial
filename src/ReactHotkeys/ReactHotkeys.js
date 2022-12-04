import { HotKeys } from "react-hotkeys";
import React from 'react';

const keyMap = {
  SNAP_LEFT: "command+left",
  DELETE_NODE: ["del", "backspace"]
};

export const ReactHotkeys = () => {
  return (
    <HotKeys keyMap={keyMap}>
      <div>
        doesnt currently work. needs to be updated
        <MyNode />
        <MyNode />
      </div>
    </HotKeys>
  );
};



const MyNode = () => {
  const deleteNode = React.useCallback(() => {
    // logic here
    console.log('this is a test')
  }, [])
  
  const handlers = {
    DELETE_NODE: deleteNode
  };

  return <HotKeys handlers={handlers}>Node contents</HotKeys>;
};
