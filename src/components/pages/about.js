import React from 'react';
import profilePicture from '../../../static/assets/images/about-me/johnattan.jpg'

export default function () {
    return (
        <div className='content-page-wrapper'>
            <div 
            className='left-column' 
            style={{
            background:'url(' + profilePicture + ') no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
            }}/>
          

            <div className='right-column'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ad asperiores maxime odio maiores, pariatur nobis magnam dolorem laudantium illo, ea rerum voluptates atque enim fuga velit voluptas libero omnis!
                Incidunt corporis a rem consequuntur voluptatem autem, at laborum officiis nostrum velit accusamus voluptatibus. Ea voluptates eligendi dolore a, eos iste, fugiat maxime nemo doloribus, natus iure deserunt distinctio suscipit.
                Debitis quam, aperiam quo minima ad est modi aspernatur nemo reiciendis deserunt, doloremque reprehenderit optio? Explicabo aliquam exercitationem dicta velit quis? Alias cupiditate nesciunt nulla ad suscipit veniam dolore at.
                Officiis consequuntur voluptatem dicta minus, laudantium tempore itaque et quod fugit ipsum voluptate maiores perspiciatis placeat sunt quidem cumque aliquam delectus minima voluptatibus similique voluptas! Pariatur sapiente suscipit doloremque. Explicabo?
                Inventore optio tenetur sunt cumque aspernatur, dolore perspiciatis exercitationem saepe illo nam amet aliquam voluptatibus, hic necessitatibus atque officiis, voluptas quos? Deleniti nihil quo pariatur? Porro perspiciatis accusantium at minus.
            </div>
        </div>
    );
}
