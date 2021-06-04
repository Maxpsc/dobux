(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{Rsk4:function(n,e,t){"use strict";t.r(e);var o=t("9og8"),r=t("WmNS"),s=t.n(r),a=t("LtsZ"),i="import React from 'react'\nimport { createStore, Models } from 'dobux'\nimport * as models from './model'\n\nimport './index.less'\n\nexport type RootModel = Models<typeof models>\n\n// \u521b\u5efa store \u5b9e\u4f8b\nconst { withProvider, useModel } = createStore(models)\n\nconst Counter: React.FC = () => {\n  const { state, reducers, effects } = useModel('counter')\n\n  const handleIncrease = () => {\n    reducers.increase()\n  }\n\n  const handleDecrease = () => {\n    reducers.decrease()\n  }\n\n  const handleSetValue = () => {\n    reducers.setValue('count', state.count + 2)\n  }\n\n  const handleSetValues = () => {    \n    reducers.setValues({\n      count: state.count - 2\n    })\n  }\n\n  const handleReset = () => {\n    reducers.reset()\n  }\n\n  const handleAsync = () => {\n    effects.increaseAsync()\n  }\n\n  if (effects.increaseAsync.loading) {\n    return <p className=\"loading\">loading ...</p>\n  }\n\n  return (\n    <div className=\"counter\">\n      <p>The count is: {state.count}</p>\n      <button onClick={handleIncrease}>+</button>\n      <button onClick={handleDecrease}>-</button>\n      <button onClick={handleSetValue}>setValue</button>\n      <button onClick={handleSetValues}>setValues</button>\n      <button onClick={handleAsync}>async</button>\n      <button onClick={handleReset}>reset</button>\n    </div>\n  )\n}\n\nexport default withProvider(Counter)",c="import { createModel } from 'dobux'\nimport { RootModel } from './index'\n\nfunction wait(ms: number) {\n  return new Promise(resolve => {\n    setTimeout(resolve, ms)\n  })\n}\n\nexport const counter = createModel<RootModel, 'counter'>()({\n  state: {\n    count: 0,\n  },\n  reducers: {\n    increase(state) {\n      state.count += 1\n    },\n    decrease(state) {\n      state.count -= 1\n    },\n  },\n  effects: (model, rootModel) => ({\n    async increaseAsync() {\n      await wait(1000)\n      model.reducers.increase()\n    },\n  }),\n})",d=".counter {\n  p {\n    font-size: 20px;\n    font-weight: bold;\n    margin-bottom: 30px;\n  }\n\n  button {\n    min-width: 42px;\n    outline: none;\n    color: #fff;\n    background-color: #1890ff;\n    border-color: #1890ff;\n    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);\n    display: inline-block;\n    padding: 5px 10px;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    font-size: 14px;\n    line-height: 1.499;\n    display: inline-block;\n    font-weight: 400;\n    white-space: nowrap;\n    text-align: center;\n    border: 1px solid transparent;\n    -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);\n    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);\n    cursor: pointer;\n    height: 32px;\n    padding: 0 15px;\n    font-size: 14px;\n    border-color: #d9d9d9;\n  }\n\n  button + button {\n    margin-left: 10px;\n  }\n}\n\n.loading {\n  display: flex;\n  font-size: 20px;\n  font-weight: bold;\n  margin-bottom: 30px;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(255, 255, 255, 0.3);\n  z-index: 10001;\n}",l="import React from 'react'\nimport { store } from './store'\n\nimport './index.less'\n\nconst { withProvider, useModel } = store\n\nconst Counter: React.FC = () => {\n  const { state, reducers, effects } = useModel('counter')\n\n  const handleIncrease = () => {\n    reducers.increase()\n  }\n\n  const handleDecrease = () => {\n    reducers.decrease()\n  }\n\n  const handleSetValue = () => {\n    reducers.setValue('count', state.count + 2)\n  }\n\n  const handleSetValues = () => {    \n    reducers.setValues({\n      count: state.count - 2\n    })\n  }\n\n  const handleReset = () => {\n    reducers.reset()\n  }\n\n  const handleAsync = () => {\n    effects.increaseAsync()\n  }\n\n  if (effects.increaseAsync.loading) {\n    return <p className=\"loading\">loading ...</p>\n  }\n\n  return (\n    <div className=\"counter\">\n      <p>The count is: {state.count}</p>\n      <button onClick={handleIncrease}>+</button>\n      <button onClick={handleDecrease}>-</button>\n      <button onClick={handleSetValue}>setValue</button>\n      <button onClick={handleSetValues}>setValues</button>\n      <button onClick={handleAsync}>async</button>\n      <button onClick={handleReset}>reset</button>\n    </div>\n  )\n}\n\nexport default withProvider(Counter)",u="import { createStore, Models } from 'dobux'\nimport * as models from './model'\n\nexport type RootModel = Models<typeof models>\n\n// \u521b\u5efa store \u5b9e\u4f8b\nexport const store = createStore(models)",p="import { createModel } from 'dobux'\nimport { RootModel } from './store'\n\nfunction wait(ms: number) {\n  return new Promise(resolve => {\n    setTimeout(resolve, ms)\n  })\n}\n\nexport const counter = createModel<RootModel, 'counter'>()({\n  state: {\n    count: 0,\n  },\n  reducers: {\n    increase(state) {\n      state.count += 1\n    },\n    decrease(state) {\n      state.count -= 1\n    },\n  },\n  effects: (model, rootModel) => ({\n    async increaseAsync() {\n      await wait(1000)\n      model.reducers.increase()\n    },\n  }),\n})",m=".counter {\n  p {\n    font-size: 20px;\n    font-weight: bold;\n    margin-bottom: 30px;\n  }\n\n  button {\n    min-width: 42px;\n    outline: none;\n    color: #fff;\n    background-color: #1890ff;\n    border-color: #1890ff;\n    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);\n    display: inline-block;\n    padding: 5px 10px;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    font-size: 14px;\n    line-height: 1.499;\n    display: inline-block;\n    font-weight: 400;\n    white-space: nowrap;\n    text-align: center;\n    border: 1px solid transparent;\n    -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);\n    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);\n    cursor: pointer;\n    height: 32px;\n    padding: 0 15px;\n    font-size: 14px;\n    border-color: #d9d9d9;\n  }\n\n  button + button {\n    margin-left: 10px;\n  }\n}\n\n.loading {\n  display: flex;\n  font-size: 20px;\n  font-weight: bold;\n  margin-bottom: 30px;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(255, 255, 255, 0.3);\n  z-index: 10001;\n}",f="import React from 'react'\nimport Header from './Header'\nimport UndoList from './UndoList'\nimport { store } from './store'\n\nimport './index.less'\n\nconst { Provider } = store\n\nconst TodoList: React.FC = () => {\n  return (\n    <Provider>\n      <div className=\"todo-list\">\n        <Header />\n        <UndoList />\n      </div>\n    </Provider>\n  )\n}\n\nexport default TodoList",h="import React, { ChangeEvent, KeyboardEvent } from 'react'\nimport { store } from '../store'\n\nfunction Header() {\n  const { state, reducers, effects } = store.useModel('header')\n\n  const handleChange = (e: ChangeEvent<{ value: string }>) => {\n    reducers.changeValue(e.target.value)\n  }\n\n  const handleKeyUp = (e: KeyboardEvent) => {\n    if (state.value && e.keyCode === 13) {\n      effects.addUndoItem()\n      reducers.changeValue('')\n    }\n  }\n\n  return (\n    <div className=\"header\">\n      <div className=\"content\">\n        TodoList\n        <input\n          onChange={handleChange}\n          onKeyUp={handleKeyUp}\n          value={state.value}\n          placeholder=\"Todo\"\n        />\n      </div>\n    </div>\n  )\n}\n\nexport default Header",x="import { createStore, Models } from 'dobux'\nimport * as models from './models'\n\nexport type RootModel = Models<typeof models>\n\nexport const store = createStore(models)",b="export { header } from './Header/model'\nexport { undoList } from './UndoList/model'",g="import { createModel } from 'dobux'\nimport { RootModel } from '../store'\n\nexport const header = createModel<RootModel, 'header'>()({\n  state: {\n    value: '',\n  },\n  reducers: {\n    changeValue(state, payload: string) {\n      state.value = payload\n    },\n  },\n  effects: (model, rootModel) => ({\n    addUndoItem() {\n      rootModel.undoList.reducers.addItem({\n        content: model.state.value,\n      })\n    },\n  }),\n})",v="import { createModel } from 'dobux'\nimport { RootModel } from '../store'\n\nfunction fetchList(): Promise<{ data: any[] }> {\n  return new Promise(resolve => {\n    setTimeout(() => {\n      resolve({\n        data: [\n          {\n            content: 'Learn dobux',\n          },\n          {\n            content: 'Learn typescript',\n          },\n        ],\n      })\n    }, 1000)\n  })\n}\n\ninterface Item {\n  done?: boolean\n  content: string\n}\n\nexport const undoList = createModel<RootModel, 'undoList'>()({\n  state: {\n    items: [\n      {\n        content: 'Learn dobux',\n      },\n      {\n        content: 'Learn typescript',\n      },\n    ] as Item[],\n  },\n  reducers: {\n    addItem(state, item: Item) {\n      state.items.push(item)\n    },\n\n    deleteItem(state, index: number) {\n      state.items.splice(index, 1)\n    },\n\n    toggleItem(state, index: number) {\n      state.items[index].done = !state.items[index].done\n    },\n  },\n  effects: (model) => ({\n    async fetchUndoList() {\n      const result = await fetchList()\n      model.reducers.setValue('items', result.data as any)\n    },\n  }),\n})",w='import React from \'react\'\nimport { store } from \'../store\'\n\nfunction UndoList() {\n  const { state, reducers, effects } = store.useModel(\'undoList\')\n\n  const handleClick = (index: number) => {\n    reducers.deleteItem(index)\n  }\n\n  const handleToggle = (index: number) => {\n    reducers.toggleItem(index)\n  }\n\n  if (effects.fetchUndoList.loading) {\n    return <div className="loading">loading ...</div>\n  }\n\n  return (\n    <div className="undo-list">\n      <h2 className="title">\n        \u6b63\u5728\u8fdb\u884c <div className="count">{state.items.filter((item: any) => !item.done).length}</div>\n      </h2>\n      <ul className="content">\n        {state.items.map((item: any, index: number) => {\n          return (\n            !item.done && (\n              <li onClick={() => handleToggle(index)} className="item" key={index}>\n                {item.content}\n                <div\n                  onClick={e => {\n                    e.stopPropagation()\n                    handleClick(index)\n                  }}\n                  className="delete"\n                >\n                  -\n                </div>\n              </li>\n            )\n          )\n        })}\n      </ul>\n      <h2 className="title" style={{ marginTop: 30 }}>\n        \u5df2\u7ecf\u5b8c\u6210{\' \'}\n        <div className="count" data-test="count">\n          {state.items.filter((item: any) => item.done).length}\n        </div>\n      </h2>\n      <ul className="content">\n        {state.items.map((item: any, index: number) => {\n          return (\n            item.done && (\n              <li onClick={() => handleToggle(index)} className="item" key={index}>\n                {item.content}\n                <div\n                  onClick={e => {\n                    e.stopPropagation()\n                    handleClick(index)\n                  }}\n                  className="delete"\n                >\n                  -\n                </div>\n              </li>\n            )\n          )\n        })}\n      </ul>\n    </div>\n  )\n}\n\nexport default UndoList',y=".todo-list {\n  .header {\n    line-height: 60px;\n    background-color: #333;\n  }\n\n  .header .content {\n    width: 600px;\n    margin: 0 auto;\n    font-size: 24px;\n    color: #fff;\n  }\n\n  .header input {\n    width: 60%;\n    float: right;\n    margin-top: 15px;\n    padding: 0 10px;\n    line-height: 24px;\n    border-radius: 5px;\n    outline: none;\n  }\n\n  .undo-list {\n    width: 600px;\n    margin: 0 auto;\n    text-align: left;\n  }\n\n  .undo-list .title {\n    line-height: 30px;\n    margin: 10px 0;\n    font-size: 24px;\n    font-weight: bold;\n  }\n\n  .undo-list .count {\n    float: right;\n    width: 30px;\n    height: 30px;\n    line-height: 30px;\n    border-radius: 50%;\n    text-align: center;\n    font-size: 12px;\n    background-color: #e6e6e6;\n  }\n\n  .undo-list .content {\n    list-style-type: none;\n  }\n\n  .undo-list .content .item {\n    line-height: 32px;\n    font-size: 16px;\n    margin-bottom: 10px;\n    background-color: #fff;\n    border-left: 3px solid #629a9c;\n    text-indent: 10px;\n    border-radius: 3px;\n  }\n\n  .undo-list .content .delete {\n    float: right;\n    width: 20px;\n    height: 20px;\n    line-height: 20px;\n    margin-top: 6px;\n    margin-right: 6px;\n    font-size: 16px;\n    margin-bottom: 10px;\n    background-color: #e6e6e6;\n    text-indent: 0;\n    border-radius: 50%;\n    text-align: center;\n  }\n}",k="import React from 'react'\nimport { createStore, Models } from 'dobux'\nimport * as models from './model'\n\nimport './index.less'\n\nexport type RootModel = Models<typeof models>\n\nexport interface CounterProps {\n  state: RootModel['counter']['state']\n  reducers: RootModel['counter']['reducers']\n  effects: RootModel['counter']['effects']\n}\n\n// \u521b\u5efa store \u5b9e\u4f8b\nconst { withProvider, withModel } = createStore(models)\n\nclass Counter extends React.Component<CounterProps> {\n  handleIncrease = () => {\n    const { reducers } = this.props\n    reducers.increase()\n  }\n\n  handleDecrease = () => {\n    const { reducers } = this.props\n    reducers.decrease()\n  }\n\n  handleSetValue = () => {\n    const { state ,reducers } = this.props\n    reducers.setValue('count', state.count + 2)\n  }\n\n  handleSetValues = () => {\n    const { state, reducers } = this.props\n    reducers.setValues({\n      count: state.count - 2\n    })\n  }\n\n  handleAsync = () => {\n    const { effects } = this.props\n    effects.increaseAsync()\n  }\n\n  handleReset = () => {\n    const { reducers } = this.props\n    reducers.reset('count')\n  }\n\n  render() {\n    const { state, effects } = this.props\n\n    if (effects.increaseAsync.loading) {\n      return <p className=\"loading\">loading ...</p>\n    }\n\n    return (\n      <div className=\"counter\">\n        <p>The count is: {state.count}</p>\n        <button onClick={this.handleIncrease}>+</button>\n        <button onClick={this.handleDecrease}>-</button>\n        <button onClick={this.handleSetValue}>setValue</button>\n        <button onClick={this.handleSetValues}>setValues</button>\n        <button onClick={this.handleAsync}>async</button>\n        <button onClick={this.handleReset}>reset</button>\n      </div>\n    )\n  }\n}\n\nexport default withProvider(withModel('counter')(Counter))",M="import { createModel } from 'dobux'\nimport { RootModel } from './index'\n\nfunction wait(ms: number) {\n  return new Promise(resolve => {\n    setTimeout(resolve, ms)\n  })\n}\n\nexport const counter = createModel<RootModel, 'counter'>()({\n  state: {\n    count: 0,\n  },\n  reducers: {\n    increase(state) {\n      state.count += 1\n    },\n    decrease(state) {\n      state.count -= 1\n    },\n  },\n  effects: (model, rootModel) => ({\n    async increaseAsync() {\n      await wait(1000)\n      model.reducers.increase()\n    },\n  }),\n})",C=".counter {\n  p {\n    font-size: 20px;\n    font-weight: bold;\n    margin-bottom: 30px;\n  }\n\n  button {\n    min-width: 42px;\n    outline: none;\n    color: #fff;\n    background-color: #1890ff;\n    border-color: #1890ff;\n    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);\n    display: inline-block;\n    padding: 5px 10px;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    font-size: 14px;\n    line-height: 1.499;\n    display: inline-block;\n    font-weight: 400;\n    white-space: nowrap;\n    text-align: center;\n    border: 1px solid transparent;\n    -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);\n    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);\n    cursor: pointer;\n    height: 32px;\n    padding: 0 15px;\n    font-size: 14px;\n    border-color: #d9d9d9;\n  }\n\n  button + button {\n    margin-left: 10px;\n  }\n}\n\n.loading {\n  display: flex;\n  font-size: 20px;\n  font-weight: bold;\n  margin-bottom: 30px;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(255, 255, 255, 0.3);\n  z-index: 10001;\n}";e["default"]={"counter-hooks":{component:Object(a["dynamic"])({loader:function(){var n=Object(o["a"])(s.a.mark((function n(){return s.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.e(3).then(t.bind(null,"J0rd"));case 2:return n.abrupt("return",n.sent.default);case 3:case"end":return n.stop()}}),n)})));function e(){return n.apply(this,arguments)}return e}()}),previewerProps:{sources:{_:{tsx:i},"model.ts":{import:"./model",content:c},"index.less":{import:"./index.less",content:d}},dependencies:{react:{version:"^16.8.3 || ^17"},dobux:{version:"1.1.0"}},identifier:"counter-hooks"}},"counter-hooks2":{component:Object(a["dynamic"])({loader:function(){var n=Object(o["a"])(s.a.mark((function n(){return s.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.e(3).then(t.bind(null,"X+3H"));case 2:return n.abrupt("return",n.sent.default);case 3:case"end":return n.stop()}}),n)})));function e(){return n.apply(this,arguments)}return e}()}),previewerProps:{sources:{_:{tsx:l},"store.ts":{import:"./store",content:u},"model.ts":{import:"./model",content:p},"index.less":{import:"./index.less",content:m}},dependencies:{react:{version:"^16.8.3 || ^17"},dobux:{version:"1.1.0"}},identifier:"counter-hooks2"}},"docs-todo-list":{component:Object(a["dynamic"])({loader:function(){var n=Object(o["a"])(s.a.mark((function n(){return s.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.e(3).then(t.bind(null,"ewSp"));case 2:return n.abrupt("return",n.sent.default);case 3:case"end":return n.stop()}}),n)})));function e(){return n.apply(this,arguments)}return e}()}),previewerProps:{sources:{_:{tsx:f},"Header/index.tsx":{import:"./Header",content:h},"store.ts":{import:"../store",content:x},"models.ts":{import:"./models",content:b},"Header/model.ts":{import:"./Header/model",content:g},"UndoList/model.ts":{import:"./UndoList/model",content:v},"UndoList/index.tsx":{import:"./UndoList",content:w},"index.less":{import:"./index.less",content:y}},dependencies:{react:{version:"^16.8.3 || ^17"},dobux:{version:"1.1.0"}},identifier:"docs-todo-list"}},"counter-class":{component:Object(a["dynamic"])({loader:function(){var n=Object(o["a"])(s.a.mark((function n(){return s.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.e(3).then(t.bind(null,"8ZmH"));case 2:return n.abrupt("return",n.sent.default);case 3:case"end":return n.stop()}}),n)})));function e(){return n.apply(this,arguments)}return e}()}),previewerProps:{sources:{_:{tsx:k},"model.ts":{import:"./model",content:M},"index.less":{import:"./index.less",content:C}},dependencies:{react:{version:"^16.8.3 || ^17"},dobux:{version:"1.1.0"}},identifier:"counter-class"}}}},"TN5+":function(n,e,t){"use strict";var o=t("0Owb"),r=t("q1tI"),s=t.n(r);t("kERV");e["a"]=n=>s.a.createElement("div",Object(o["a"])({className:"__dumi-default-alert"},n))},kERV:function(n,e,t){},oJYU:function(n,e,t){"use strict";t.r(e);var o=t("q1tI"),r=t.n(o),s=t("dEAq"),a=t("TN5+"),i=t("ZpkN");t("Rsk4");e["default"]=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"\u5feb\u901f\u4e0a\u624b"},r.a.createElement(s["AnchorLink"],{to:"#\u5feb\u901f\u4e0a\u624b","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5feb\u901f\u4e0a\u624b"),r.a.createElement("p",null,r.a.createElement(a["a"],null,"Tips: \u8bf7\u786e\u4fdd\u4f60\u7684 React \u7248\u672c >= ",r.a.createElement("strong",null,"16.8.0"))),r.a.createElement("h2",{id:"\u5b89\u88c5"},r.a.createElement(s["AnchorLink"],{to:"#\u5b89\u88c5","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5b89\u88c5"),r.a.createElement(i["a"],{code:"// \u4f7f\u7528 npm\n$ npm i dobux --save\n\n// \u4f7f\u7528 yarn\n$ yarn add dobux",lang:"bash"}),r.a.createElement("h2",{id:"\u57fa\u672c\u4f7f\u7528"},r.a.createElement(s["AnchorLink"],{to:"#\u57fa\u672c\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u4f7f\u7528"),r.a.createElement(i["a"],{code:"import { createModel, createStore } from 'dobux'\n\n// 1. \u521b\u5efa Model\nexport const counter = createModel()({\n  state: {\n    count: 0,\n  },\n  reducers: {\n    increase(state) {\n      state.count += 1\n    },\n    decrease(state) {\n      state.count -= 1\n    },\n  },\n  effects: (model, rootModel) => ({\n    async increaseAsync() {\n      await wait(2000)\n      model.reducers.increase()\n    },\n  }),\n})\n\n// 2. \u521b\u5efa Store\nconst store = createStore({\n  counter,\n})\n\n// 3. \u6302\u8f7d\u6a21\u578b\nconst { Provider, useModel } = store\n\nfunction App() {\n  return (\n    <Provider>\n      <Counter />\n    </Provider>\n  )\n}\n\n// 4. \u6d88\u8d39\u6a21\u578b\nfunction Counter() {\n  const { state, reducers, effects } = useModel('counter')\n\n  const handelIncrease = () => {\n    reducers.increase()\n  }\n\n  const handelDecrease = () => {\n    reducers.decrease()\n  }\n\n  const handelIncreaseAsync = () => {\n    effects.increaseAsync()\n  }\n\n  // \u5f53\u5f02\u6b65\u8bf7\u6c42 `increaseAsync` \u6267\u884c\u65f6 `loading` \u4f1a\u8bbe\u7f6e\u4e3a true\uff0c\u663e\u793a loading\n  if (effects.increaseAsync.loading) {\n    return <p className=\"loading\">loading ...</p>\n  }\n\n  return (\n    <div>\n      <div>The count is\uff1a{state.count}</div>\n      <button onClick={handelIncrease}>+</button>\n      <button onClick={handelDecrease}>-</button>\n      <button onClick={handelIncreaseAsync}>async</button>\n    </div>\n  )\n}",lang:"jsx"}),r.a.createElement("p",null,r.a.createElement(s["AnchorLink"],{to:"/guide/examples#%E7%AE%80%E5%8D%95%E7%9A%84%E8%AE%A1%E6%95%B0%E5%99%A8"},"\u70b9\u51fb\u67e5\u770b Typescript \u793a\u4f8b"))))}},x2v5:function(n){n.exports=JSON.parse("{}")}}]);