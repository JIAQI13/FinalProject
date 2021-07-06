import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import HexagonGraph from '../components/HexagonGraph';
// For more information, read
// https://developer.spotify.com/web-api/authorization-guide/#authorization_code_flow

const Home = () => {
  return (
    <BrowserRouter>
      <h1>home Pages</h1>
      <Link to='/privacy-policy'>view</Link>
      <Switch>
        <Route path='/privacy-policy' component={() => {
          window.location.href = 'http://localhost:4000/login';
          return null;
        }} />
      </Switch>
      <HexagonGraph graphData={data}></HexagonGraph>
    </BrowserRouter>
  );
};
export default Home;

const data = {
  "topArtists": [
    {
      "id": "0oSGxfWSnnOXhD2fKuz2Gy",
      "name": "David Bowie",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5eb0db3b11972a84207f256769b",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/ab676161000051740db3b11972a84207f256769b",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f1780db3b11972a84207f256769b",
          "width": 160
        }
      ]
    },
    {
      "id": "2GetD8JH1hPJVDBjr1HiuP",
      "name": "Chill Jazz-Lounge",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5eb99e3b84db2e43839f2fe78b8",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/ab6761610000517499e3b84db2e43839f2fe78b8",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f17899e3b84db2e43839f2fe78b8",
          "width": 160
        }
      ]
    },
    {
      "id": "47mIJdHORyRerp4os813jD",
      "name": "League of Legends",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5eb01d9f68fbc43d5243dc2c0fe",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/ab6761610000517401d9f68fbc43d5243dc2c0fe",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f17801d9f68fbc43d5243dc2c0fe",
          "width": 160
        }
      ]
    },
    {
      "id": "3XHO7cRUPCLOr6jwp8vsx5",
      "name": "alt-J",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5eb6587f1b18c9fab29d5164324",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/ab676161000051746587f1b18c9fab29d5164324",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f1786587f1b18c9fab29d5164324",
          "width": 160
        }
      ]
    },
    {
      "id": "7daSp9zXk1dmqNxwKFkL35",
      "name": "Kupla",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5ebbc2dba4435c794121d40fd23",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/ab67616100005174bc2dba4435c794121d40fd23",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f178bc2dba4435c794121d40fd23",
          "width": 160
        }
      ]
    },
    {
      "id": "78xUyw6FkVZrRAtziFdtdu",
      "name": "The Roots",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5eb7e92a85b9e31236380cd38f2",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/ab676161000051747e92a85b9e31236380cd38f2",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f1787e92a85b9e31236380cd38f2",
          "width": 160
        }
      ]
    },
    {
      "id": "4LLpKhyESsyAXpc4laK94U",
      "name": "Mac Miller",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5ebed3b89aa602145fde71a163a",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/ab67616100005174ed3b89aa602145fde71a163a",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f178ed3b89aa602145fde71a163a",
          "width": 160
        }
      ]
    },
    {
      "id": "5KJjxTI0Nut0kY5xrqNzdd",
      "name": "The Jazz Masters",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b2730c5070a0d07108a678b5b81d",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e020c5070a0d07108a678b5b81d",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048510c5070a0d07108a678b5b81d",
          "width": 64
        }
      ]
    },
    {
      "id": "3koiLjNrgRTNbOwViDipeA",
      "name": "Marvin Gaye",
      "images": [
        {
          "height": 1232,
          "url": "https://i.scdn.co/image/cf79bd3e5c787e2ec152eeb1ea5538b0d4cf1434",
          "width": 1000
        },
        {
          "height": 788,
          "url": "https://i.scdn.co/image/f69e669cd95c6008c6220fd060982ff9516ed636",
          "width": 640
        },
        {
          "height": 246,
          "url": "https://i.scdn.co/image/c2c1b3612f38b206411173c168b912d306b5c196",
          "width": 200
        },
        {
          "height": 79,
          "url": "https://i.scdn.co/image/aa28a931be2da1c33411b0d6c106bcf6e3d17de7",
          "width": 64
        }
      ]
    },
    {
      "id": "4ytkhMSAnrDP8XzRNlw9FS",
      "name": "Vince Guaraldi Trio",
      "images": [
        {
          "height": 1000,
          "url": "https://i.scdn.co/image/822d7cac5aa9649b2c8a0be5da89567f8b80ca56",
          "width": 1000
        },
        {
          "height": 640,
          "url": "https://i.scdn.co/image/0c2ca300db3332bf24ae50cce9dbb1e5d3789ea6",
          "width": 640
        },
        {
          "height": 200,
          "url": "https://i.scdn.co/image/2c2dbcbc0bce3aa7c0bca4f114ffec7a90688999",
          "width": 200
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/c649b5b0ef55206408245e435324ffc0dd376ae9",
          "width": 64
        }
      ]
    },
    {
      "id": "1nJvji2KIlWSseXRSlNYsC",
      "name": "The Velvet Underground",
      "images": [
        {
          "height": 1236,
          "url": "https://i.scdn.co/image/d69c2cf10323bf08443c7d122f3a1824a760ab57",
          "width": 1000
        },
        {
          "height": 791,
          "url": "https://i.scdn.co/image/24e7531935f88f55744cc8c9ed2528f466cba276",
          "width": 640
        },
        {
          "height": 247,
          "url": "https://i.scdn.co/image/fedcb6f64de6571e2c208a21fc16b9e05e38cf2f",
          "width": 200
        },
        {
          "height": 79,
          "url": "https://i.scdn.co/image/0fda1f46337398e35d5c7c672ddc77beb68a8f93",
          "width": 64
        }
      ]
    },
    {
      "id": "5MbNzCW3qokGyoo9giHA3V",
      "name": "EARTHGANG",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5eb7bd84652114eabfcb1d4514f",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/ab676161000051747bd84652114eabfcb1d4514f",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f1787bd84652114eabfcb1d4514f",
          "width": 160
        }
      ]
    },
    {
      "id": "77aATgrzmuoRjmqxPcEIHU",
      "name": "brillion.",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5eba722a44cb87d406929238297",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/ab67616100005174a722a44cb87d406929238297",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f178a722a44cb87d406929238297",
          "width": 160
        }
      ]
    },
    {
      "id": "1CYsQCypByMVgnv17qsSbQ",
      "name": "Crosby, Stills, Nash & Young",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5eb4e5018dad07ee004f171d7d3",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/ab676161000051744e5018dad07ee004f171d7d3",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f1784e5018dad07ee004f171d7d3",
          "width": 160
        }
      ]
    },
    {
      "id": "3vzJueN7TkCtYpz1myVmDU",
      "name": "Dontcry",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5ebc09101c3206236acff7a29bc",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/ab67616100005174c09101c3206236acff7a29bc",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f178c09101c3206236acff7a29bc",
          "width": 160
        }
      ]
    },
    {
      "id": "22WZ7M8sxp5THdruNY3gXt",
      "name": "The Doors",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5eb440959e022afc20e819050bd",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/ab67616100005174440959e022afc20e819050bd",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f178440959e022afc20e819050bd",
          "width": 160
        }
      ]
    },
    {
      "id": "6bA2OonnJsG1tN9yClu2aC",
      "name": "mell-ø",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5eb022046cc52cc0b8ccae376b0",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/ab67616100005174022046cc52cc0b8ccae376b0",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f178022046cc52cc0b8ccae376b0",
          "width": 160
        }
      ]
    },
    {
      "id": "6TeBxtluBMQixZcKkJ3ZrB",
      "name": "HM Surf",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5ebc1105b865f1018cfc7df79d7",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/ab67616100005174c1105b865f1018cfc7df79d7",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f178c1105b865f1018cfc7df79d7",
          "width": 160
        }
      ]
    },
    {
      "id": "6vLlQYujOujIrm7zAKzEdG",
      "name": "Donovan",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5eb913703ba6b15fb3ba0547de4",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/ab67616100005174913703ba6b15fb3ba0547de4",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f178913703ba6b15fb3ba0547de4",
          "width": 160
        }
      ]
    },
    {
      "id": "50Ej4gF8iYESted3e4JZ4t",
      "name": "dryhope",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5eb8e218737ce396af50b55e505",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/ab676161000051748e218737ce396af50b55e505",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f1788e218737ce396af50b55e505",
          "width": 160
        }
      ]
    }
  ]
}
