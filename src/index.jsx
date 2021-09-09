import * as $ from 'jquery'
import Post from '@models/Post.js'
import '@/styles/styles.css'
import json from '@/assets/example.json'
import xmlData from '@/assets/data.xml'
import csvData from '@/assets/ifs_pd9ctrlo.csv'
import PicExample from '@/assets/kubernetes.png'
import './styles/scss.scss'
import './babel.js'
import React from 'react'
import {render} from 'react-dom'

const post = new Post('Webpack initial', PicExample)

$('pre').addClass('code').html(post.toString())

const App = () => (
  <div className="container">
    <h1>Web pack initial</h1>
    <hr />
    <div className="pic" />
    <hr />
    <pre />
    <hr />
    <div className="card">
      <h2>SCSS</h2>
    </div>
  </div>
)

render(<App />, document.getElementById('app'))

console.log('Post to string:', post.toString())
console.log('JSON:', json)
console.log('XML:', xmlData)
console.log('CSV:', csvData)
