import { useState } from "react";
import {
  ParallaxBanner,
  ParallaxBannerLayer,
  ParallaxProvider,
} from "react-scroll-parallax";
function App() {
  return (
    <ParallaxProvider>
      <ParallaxBanner style={{ aspectRatio: "3 / 1" }}>
        <ParallaxBannerLayer
          image="https://images.unsplash.com/photo-1667420140866-01d37a043536?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          speed={-35}
        />
      </ParallaxBanner>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe
        esse ducimus rerum a dignissimos excepturi molestiae soluta veritatis
        quidem tempore sed temporibus numquam suscipit voluptatibus, id, natus
        nam dicta reiciendis beatae repellendus qui vitae. Quisquam recusandae
        placeat impedit error quidem iste ipsam nesciunt beatae doloremque quod?
        Debitis quos laudantium ea quae architecto doloremque impedit quibusdam
        doloribus quo! Asperiores doloremque ab minima placeat accusantium,
        ducimus, accusamus repellendus officia quo soluta fugiat molestiae.
        Aspernatur aliquam, molestiae similique perferendis quidem nam esse
        necessitatibus labore corporis mollitia maiores numquam voluptas minima
        et voluptatem natus sapiente consequatur laboriosam consectetur
        explicabo adipisci odio aut repellendus.
      </p>
      <ParallaxBanner style={{ aspectRatio: "3 / 1" }}>
        <ParallaxBannerLayer
          image="https://images.unsplash.com/photo-1729848663168-70a1ad4d5edb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          speed={-35}
        />
      </ParallaxBanner>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero nobis
        quia non deserunt. Alias, perferendis officiis tempora qui unde sequi?
        Saepe ea qui a iure dolorum dolore sapiente eum corporis harum, nemo
        perspiciatis voluptate? Quo alias quis blanditiis quisquam saepe animi
        numquam ad dolorum illo tempore, laudantium neque quaerat exercitationem
        eius natus corporis dolores sunt dolorem commodi non deleniti, ex
        assumenda! Repudiandae qui repellat mollitia laudantium perferendis
        dignissimos temporibus dicta officiis maxime debitis repellendus
        laborum, magnam, ullam assumenda nisi. Officia laborum perferendis quae
        facilis rem hic earum beatae corporis. Officia veritatis eaque,
        necessitatibus nihil velit incidunt repellat. Repudiandae, asperiores
        autem?
      </p>
      <ParallaxBanner style={{ aspectRatio: "3 / 1" }}>
        <ParallaxBannerLayer
          image="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          speed={-35}
        />
      </ParallaxBanner>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sint
        commodi animi iusto hic molestias accusamus voluptatibus expedita
        praesentium, exercitationem, a distinctio blanditiis architecto quas
        illo labore aliquam vitae corrupti nesciunt ratione sequi. Fuga harum
        sint cupiditate atque perspiciatis et! Laudantium nostrum vitae, iste
        ipsam error ducimus laborum magni esse quas corrupti consectetur
        voluptates aut fugit vero? Cupiditate repellat, quibusdam quod eligendi
        ab fugit sint impedit velit sunt, exercitationem neque accusantium
        quasi, cumque necessitatibus vel. Voluptatibus quo nihil eligendi
        voluptates repudiandae laborum minima odio reiciendis et a aut quasi
        facere ratione cumque, quod quis. Quaerat nihil alias accusamus
        blanditiis cumque?
      </p>
    </ParallaxProvider>
  );
}

export default App;
