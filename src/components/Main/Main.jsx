import { HeaderTop } from '../HeaderTop'
import { Tabs } from '../Tabs/Tabs'
import { Roadmap } from '../Roadmap'
import "./Main.scss"
import { Suggestion } from '../Suggestion/Suggestion'
import { Comment } from '../Commnet'

export function Main(){
  return (
    <section id='Main'>
      <div className='container d-flex py-2 gap-3'>
        <div className='left'>
          <HeaderTop/>
          <Tabs/>
          <Roadmap planned={3} inProgress={2} live={1}/>
        </div>
        <div className="right">
          <Suggestion/>
          <Comment/>
          <Comment/>
          <Comment/>
          <Comment/>
          <Comment/>
          <Comment/>
          <Comment/>
          <Comment/>
          <Comment/>
          <Comment/>
          <Comment/>
          <Comment/>
          <Comment/>
          <Comment/>
          <Comment/>
          <Comment/>
          <Comment/>
          <Comment/>
        </div>
      </div>
    </section>
  )
}
