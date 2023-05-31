import { useState } from "react";
import { Button } from "./components/Button/Button";
import { PresentationCard } from "./components/PresentationCard/PresentationCard";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((count) => count + 1);
  };

  return (
    <> 
      <div className="random">
        Random container
      </div>
      <PresentationCard />
      <div className="card">
        <Button count={incrementCount}>count is {count}</Button>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum corrupti
        nisi adipisci quas quisquam accusantium cumque, sapiente necessitatibus
        laborum hic! Quibusdam nihil aut molestiae harum tempore dolorem iste
        corporis deleniti at? Excepturi enim voluptatum deleniti distinctio sint
        aspernatur facere itaque odit amet perferendis quia, consectetur quis
        consequatur repudiandae aliquid corporis odio. Aperiam quasi illum enim
        quae. Adipisci ducimus ullam voluptatem culpa nihil repudiandae laborum,
        rem eligendi ea, dolore, ipsam eum magni. Cumque reiciendis blanditiis
        voluptates earum, aliquam distinctio perspiciatis quos nisi animi
        commodi placeat facere inventore neque deleniti. Exercitationem
        distinctio aperiam ex maiores ad rem nostrum blanditiis quas repellendus
        perspiciatis omnis, accusamus soluta ea quos assumenda, voluptate
        eveniet quam esse accusantium! Odio, iste suscipit, aut facere cum omnis
        pariatur mollitia ut nobis nihil et quas excepturi ullam dolorum
        officiis sequi corrupti necessitatibus commodi atque consequatur illo
        accusamus corporis. Unde cum praesentium ipsam perferendis in officiis
        tempore quo, repellat, hic modi vero quisquam veniam repudiandae,
        molestiae autem magnam rerum. Incidunt suscipit quam blanditiis
        asperiores quisquam eaque sequi praesentium ducimus nisi laboriosam
        totam deleniti quas et exercitationem sed labore quis dignissimos magnam
        commodi nobis, delectus dolores quia explicabo voluptate? Rerum
        voluptatem tempore error. Pariatur suscipit modi doloremque culpa, qui,
        rem non quas quasi placeat unde, nihil nam ullam quod facere facilis
        delectus. Aliquid totam deleniti alias adipisci blanditiis soluta nemo
        in, quaerat aut? Totam dignissimos dolor veniam dolorum harum quod rerum
        aperiam asperiores ex officia excepturi facere, quas neque enim officiis
        veritatis ea magni velit cupiditate reiciendis quasi perferendis
        perspiciatis. Quo sint asperiores sequi recusandae voluptatum soluta
        laboriosam consequuntur at cupiditate atque adipisci alias, magnam
        culpa, modi doloribus quaerat ipsum dolorem fuga iste nostrum commodi
        perspiciatis eum. Possimus quaerat suscipit aliquid quisquam at! Tempora
        ullam ratione facere velit libero at, voluptate, laudantium adipisci
        reiciendis molestiae modi incidunt placeat consequatur soluta in est eum
        maiores commodi nisi quia? Possimus amet saepe illo, aspernatur facilis
        veniam! Aut, culpa. Officiis provident eum autem numquam voluptatem
        cumque, inventore voluptate, tenetur aliquam iusto perferendis earum
        placeat debitis delectus nisi ipsum! Optio cupiditate rem, suscipit
        asperiores temporibus nam nobis recusandae sapiente, quaerat velit quia
        odio a repudiandae quisquam cumque quae eum iusto tempore veritatis
        dolore quibusdam ad! Ipsa suscipit reiciendis cum rerum nihil, maxime,
        laboriosam ex in officia consectetur dolore voluptatem blanditiis,
        veniam accusantium. Fugiat eum dolorum nostrum dicta distinctio
        consequatur ab, aperiam velit eos labore eveniet quae impedit laborum ex
        deleniti! Aspernatur similique vel dicta fugiat sequi quisquam
        consequuntur consequatur quis aperiam corporis voluptatem, nostrum nisi
        libero itaque laborum aut molestias facere quos ducimus quam culpa
        ratione modi. Sequi reprehenderit, quos magni quis minus temporibus quod
        optio consequatur in iste nesciunt alias ipsam, autem, magnam
        accusantium vel veritatis! Magnam facilis perferendis amet laboriosam,
        placeat quo. Velit ad voluptas atque vitae optio natus soluta temporibus
        libero itaque aperiam ullam, amet quae porro vel molestiae quos
        inventore deleniti? Itaque aliquid hic veritatis, fugit ratione adipisci
        blanditiis doloribus saepe perferendis architecto, qui nostrum numquam
        rerum voluptas placeat quos temporibus! Quia accusantium, pariatur eum
        maiores minima recusandae nesciunt inventore alias. Vero blanditiis
        distinctio aliquam ea magnam quaerat ut, quam voluptates! Numquam
        accusantium eligendi neque, ipsam reiciendis inventore cumque suscipit,
        facilis harum ea autem fuga placeat quis labore quos nihil optio itaque
        tenetur voluptas libero non totam voluptatum excepturi? In blanditiis
        aspernatur nobis numquam ducimus aliquam amet eius, at ipsum voluptatem.
        Deleniti illum sunt voluptatem suscipit earum aut odit veniam laudantium
        beatae, sequi soluta? Quis tempora ratione rem debitis alias quaerat.
        Accusantium distinctio obcaecati quidem laudantium dignissimos unde
        earum praesentium harum aperiam? Modi eos earum qui reiciendis
        repudiandae. Id, harum amet deleniti delectus ipsam saepe quis suscipit
        accusantium consequuntur rem, libero quia ad cum excepturi fugit
        eligendi assumenda placeat repudiandae rerum dolorem accusamus aliquid.
        Sint iusto voluptatibus tenetur architecto aperiam a voluptate,
        cupiditate dignissimos odio molestias fuga minus reiciendis dolores ipsa
        rem maxime modi nam veritatis expedita quam accusantium. Odit cupiditate
        cumque eveniet odio! In earum iusto vel cum corrupti consequuntur sed at
        accusantium iste, itaque facere nihil debitis. Eum fugiat ex atque porro
        sunt saepe dignissimos, eos nam non nobis quo qui iste sint animi quod
        explicabo inventore provident quasi repellendus suscipit eveniet
        corrupti. Ipsum dolore minus, laborum natus minima corrupti harum
        repellat unde quod reprehenderit facere ducimus eius illo quasi labore
        at voluptatibus mollitia totam porro? Non recusandae perferendis harum
        assumenda maiores, sapiente debitis qui laborum, obcaecati numquam animi
        perspiciatis incidunt dignissimos. Iste consequatur odit officiis vitae.
        Deleniti iure nihil tenetur officia obcaecati laboriosam, id quam ipsum
        a ducimus! Quidem rerum quaerat autem asperiores odio at ipsam
        perspiciatis vel vero. Eum obcaecati quam provident nihil quisquam
        reiciendis necessitatibus inventore beatae eius, voluptas, officiis at
        qui aperiam. Excepturi deleniti voluptate, quasi temporibus commodi ex
        aliquam natus, itaque soluta atque autem nulla repellendus. Libero
        laboriosam numquam veniam quia corporis necessitatibus. Corrupti dolore
        atque fuga molestias, similique excepturi. Ullam placeat, possimus
        labore doloribus asperiores est sit quo? Labore, dolorum mollitia. Est,
        porro sint voluptatibus debitis dicta aut, perspiciatis officiis magni
        quas modi sed itaque? Aspernatur, fugit mollitia ullam incidunt quaerat
        molestiae est odit nobis ratione, fugiat veniam sapiente et architecto?
        Est sequi minus doloremque animi enim, vitae beatae neque dolorum harum.
        Voluptatum, nemo esse et dolore expedita nesciunt vitae accusamus
        consequatur tenetur repudiandae illum est necessitatibus accusantium
        dolores odit eveniet dolorum provident deleniti blanditiis doloremque
        laborum itaque! Fugit rem porro dolorum expedita ducimus atque cumque
        vitae sapiente sed ipsum, ipsa reprehenderit tempora distinctio adipisci
        amet quidem id iure maiores alias molestias consequatur maxime
        provident! Animi temporibus beatae nulla, tempore velit corporis
        nesciunt illum iusto suscipit nobis eos officiis mollitia non quae atque
        aliquam explicabo earum quasi magnam accusamus neque ullam! Ipsum
        explicabo unde qui magnam molestias, sequi nam esse at iusto laborum
        alias numquam, quidem, dicta dolor repellendus architecto consequatur
        laudantium porro aut. Reiciendis dolor blanditiis deleniti iusto! Fugiat
        dolorum, sed ratione corporis mollitia harum modi exercitationem enim
        aliquid ipsa illum ipsam quam doloribus. Illum dolorum quaerat et.
        Cumque, quidem. Consequatur facere hic unde sequi voluptas nesciunt vero
        officiis, laboriosam aperiam fuga error quae ipsa non, dolorum commodi
        dolor quos consequuntur possimus rem?
      </div>
    </>
  );
}

export default App;
