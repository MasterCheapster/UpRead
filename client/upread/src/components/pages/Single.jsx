import React from 'react'
import Edit from '../../edit.png'
import Delete from '../../delete.png'
import {Link} from 'react-router-dom'
import Menu from '../Menu';


export default function Single() {
  return (
    <div className="single">
      <div className="content">
      <img src="https://images.pexels.com/photos/12064730/pexels-photo-12064730.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="post_image" />
      <div className="user">
      <img src="https://images.pexels.com/photos/14823055/pexels-photo-14823055.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
      <div className="info">
      <span>Caroll</span>
      <p>posted 2 days ago</p>
      </div>

      <div className="edit">
      <Link to={`/write?edit=2`}>    
      <img src={Edit} alt="" />
</Link>
       <img src={Delete} alt="" />
      </div>

      </div>

      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, totam.</h1>
      <p className='content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt impedit repellendus a, harum magni vel eligendi recusandae voluptates modi earum quisquam itaque deserunt id voluptate. Laudantium quasi reprehenderit ex perspiciatis culpa esse consequuntur facilis, sapiente ullam, libero non officiis error cumque at soluta ea vel fuga. Officia, laborum consequuntur esse, eum nesciunt neque amet nemo explicabo nobis voluptates ullam dolor aspernatur. Quaerat sapiente, labore explicabo, vel illo quis optio hic quos eligendi sit odio sunt deleniti ullam, mollitia nobis a aspernatur omnis soluta maiores. Velit dignissimos quia ut quis porro non libero autem odio. Praesentium laborum nihil saepe ullam quos quis? Tempore nemo omnis libero eveniet ipsam qui! Ex soluta voluptates repellendus explicabo exercitationem! At magni, nisi veritatis esse non obcaecati officia error sunt aliquam tempore laudantium, provident nobis impedit fugiat voluptate sapiente cumque dolorum quasi. Nam vel delectus officia id sequi ipsam dolorum ea eos, laboriosam iusto quam possimus ad reiciendis itaque autem nostrum eius esse quo natus veniam optio? Est illo repellendus doloribus, illum necessitatibus optio voluptatibus recusandae nam enim id voluptatem quia dolore aut officia distinctio consequuntur amet fugiat nemo! Quod ullam cum natus nostrum nisi assumenda quasi explicabo ipsam, deserunt eligendi itaque obcaecati saepe ipsa impedit neque non quibusdam veritatis. Accusamus soluta odio eaque et nesciunt sit perspiciatis, exercitationem molestiae ullam rem est, veritatis laborum in quam amet vel sunt nihil delectus vero deserunt consequatur aut hic commodi non. Ut, odit rerum. Doloremque aliquam pariatur aperiam ab alias error eaque porro voluptate? Laboriosam temporibus esse veniam explicabo inventore quod voluptatibus laudantium. Recusandae eveniet quos iure architecto modi eum commodi tempore minus quis ratione explicabo ullam reprehenderit eaque, distinctio eos a est? Molestias et harum sunt natus pariatur! Aliquam ea autem ipsam minima ipsum rerum nam, odio iusto maxime qui, doloremque itaque ullam, iste facilis! Rem, dolor necessitatibus dolorem ea obcaecati commodi sit facere porro excepturi, aspernatur animi officia dignissimos! Sint doloremque excepturi numquam veniam similique, soluta laudantium quod voluptates dolore beatae odio. Aperiam iure nisi, omnis quas ullam ducimus libero harum necessitatibus, optio facilis culpa asperiores deleniti illo quibusdam ut doloribus labore mollitia expedita corrupti quidem fuga sapiente reiciendis? Rerum, eaque dignissimos. Vitae fugiat molestiae soluta facere cupiditate iure corrupti iste, labore id quo nulla repudiandae temporibus. Sint esse ut, beatae, molestiae eaque sequi libero aspernatur nemo, explicabo ipsum deserunt minima! Esse debitis, distinctio, illo culpa assumenda mollitia consequuntur nihil cupiditate alias possimus veritatis eius vero obcaecati maxime. Perferendis asperiores dolorum officia doloribus in vel quia necessitatibus velit facere officiis amet quidem saepe eius atque cumque aliquam iure, reiciendis adipisci eligendi illum, magnam laudantium incidunt neque reprehenderit. Minima nisi dolorum quisquam id temporibus hic sint quaerat corporis praesentium magni dolorem aut iusto perferendis, totam ut voluptates eaque sunt. Aliquam fugiat facere quisquam asperiores voluptatibus, corrupti molestias! Iure aperiam ipsa laudantium ducimus, magnam pariatur quasi. Modi excepturi hic, itaque consequuntur expedita tenetur veritatis. Aliquid error numquam, fugiat facere quidem dolore harum eligendi. Ipsam molestias ratione, ad labore quos fuga quidem, quas possimus aperiam praesentium nemo nobis vel!</p>
      </div>
      <div className="menu">
      <Menu/>
      </div>
    </div>
  )
}
