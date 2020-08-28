# 
- @import-normalize
- 使用dart-sass代替node-sass
- yarn add dart-sass不行
- yarn add node-sass@npm:dart-sass行

- yarn add styled-components   支持文件yarn add @types/styled-components

- copy run modify

- yarn add --dev @types/react-router-dom

- 使用HashRouter

- 解决node-sass问题
- yarn install失败，一致性验证
- 解决styled-component支持 css $变量
- hashRouter与BrowserRouter
- jsx模板字符串里支持CSS变量
- 有时候并不是你程序由问题，而是要重新yarn start一下，即使程序编译提示你语法错误，可能是之前编译的时候这个文件完全没有使用过这个特性（如react组件），编译器没有加载解析器，要重新yarn start一下才会加载。


实现tags的功能，使用react函数组件与typescript语法，useState，map函数返回一个数组的标签来渲染，用tags数组存所有tag，selectedTags存已选中的tag，用indexOf返回值从判断是否在，然后根据值设置clasName，然后样式不同
```
const TagsSection: React.FC = () => {
  const [tags, setTags] = useState<string[]>(["通用", "饮食", "交通", "住宿"]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const onAddTag = () => {
    const newTag = window.prompt("请输入标签名：");   //添加新tag
    if (newTag) {
      setTags([...tags, newTag])
    }
  }
  const onToggleTag = (tag: string) => {
    if (selectedTags.indexOf(tag) >= 0) {
      setSelectedTags(selectedTags.filter(t => t !== tag));     //再次点击不选中
    } else {
      setSelectedTags([...selectedTags, tag])   //点击选中
    }
  }
  const setClass = (tag: string) => {
    return selectedTags.indexOf(tag) >= 0 ? 'selected' : '';    //设置className也就是设置样式
  }
  return (
    <Wrapper>
      <ol>
        {tags.map(tag => <li key={tag} onClick={() => onToggleTag(tag)} className={setClass(tag)}> {tag}</li>)}
      </ol>
      <button onClick={onAddTag}>新建标签</button>
    </Wrapper>
  )
}
```

可以input一个 state，useState 用解构的方式

具体标签编辑页面使用useParams获取url id展示不同页面