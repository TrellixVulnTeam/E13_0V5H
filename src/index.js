import * as $ from 'jquery'
import Post from '@models/Post.js'
import '@/styles/styles.css'
import json from '@/assets/example.json'
import xmlData from '@/assets/data.xml'
import csvData from '@/assets/ifs_pd9ctrlo.csv'
import PicExample from '@/assets/kubernetes.png'
import './styles/scss.scss'
import './babel.js'

const post = new Post('Webpack initial', PicExample)

$('pre').addClass('code').html(post.toString())

console.log('Post to string:', post.toString())
console.log('JSON:', json)
console.log('XML:', xmlData)
console.log('CSV:', csvData)
