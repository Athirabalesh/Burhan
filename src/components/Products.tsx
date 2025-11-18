import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// seafoods
import KozhuvaImage from "@/assets/products/seafoods/kozhuva.jpg";
import CobiaImage from "@/assets/products/seafoods/cobia.jpg";
import LobsterImage from "@/assets/products/seafoods/lobster.jpg";
import MahimahiImage from "@/assets/products/seafoods/mahimahicurrycut.jpg";
import MerlinImage from "@/assets/products/seafoods/merlincurrycut.jpeg";
import OctobusImage from "@/assets/products/seafoods/octobus.webp";
import PdshrimpImage from "@/assets/products/seafoods/pdshrimp.jpeg";
import SalmonImage from "@/assets/products/seafoods/salmon.jpg";
import SeefishImage from "@/assets/products/seafoods/seerfishcurrycut.webp";
import SquidImage from "@/assets/products/seafoods/squid.jpg";
import SquidringImage from "@/assets/products/seafoods/squidring.jpeg";
import Swordfish from "@/assets/products/seafoods/swordcurrycut.webp";
import TravelleryImage from "@/assets/products/seafoods/travellerycurrycut.jpg";
import TunaImage from "@/assets/products/seafoods/tunacurrycut.png";
import Whitebase from "@/assets/products/seafoods/whitebasa.jpg";

// readytofry
import PopcornChickenImage from "@/assets/products/readytofry/popcornchicken.jpg";
import popcornPrawnsImage from  "@/assets/products/readytofry/popcornprawns.jpg";
import ParotaImage from "@/assets/products/readytofry/parota.jpeg";
import CutletImage from "@/assets/products/readytofry/cutlet.jpg";
import SamoosaImage from "@/assets/products/readytofry/samoosa.jpg";
import NuggetsImage from "@/assets/products/readytofry/nuggets.jpg";
import SpringRollsImage from "@/assets/products/readytofry/SpringRolls.jpg";
import MomosImage from "@/assets/products/readytofry/momos.jpg";
import BurgerPattiesImage from "@/assets/products/readytofry/burggerpatties.jpg";
import FrenchfriesImage from "@/assets/products/readytofry/frenchfries.jpg";
// poultry
import ChickenwholeImage from "@/assets/products/poultrymeat/chickenwholew:oskin.jpeg";
import ChickenlollipopImage from "@/assets/products/poultrymeat/chickenlolipop.jpg";
import ChickenwingsImage from "@/assets/products/poultrymeat/chickenwings.webp";
import ChhickencurrycutImage from "@/assets/products/poultrymeat/chickencurrycut.jpg";
import BuffalobonelessImage from "@/assets/products/poultrymeat/Buffalo-Boneless-curry-cut.jpg";
// vegetables
import ButterImage from "@/assets/products/vegetables/butter.jpg";
import GreenpeasImage from "@/assets/products/vegetables/greenpeas.jpg";
import PaneerImage from "@/assets/products/vegetables/paneer.jpg";
import SweetcornImage from "@/assets/products/vegetables/sweetcorns.jpg";

const products = {
  seafoods: [
    { name: "PD Shrimp", image: PdshrimpImage},
    { name: "Seer Fish Currycut", image: SeefishImage},
    { name: "Tuna Curry Cut", image: TunaImage},
    { name: "Travelly Curry Cut", image: TravelleryImage},
    { name: "Merlin Curry Cut", image: MerlinImage},
    { name: "Mahi Mahi Curry Cut", image: MahimahiImage},
    { name: "White Basa", image: Whitebase},
    { name: "Sword Currycut", image: Swordfish},
    { name: "Cobia", image: CobiaImage},
    { name: "Kozhuva", image: KozhuvaImage},
    { name: "Squid Rings", image: SquidringImage},
    { name: "Squid", image: SquidImage},
    { name: "Salmon", image: SalmonImage},
    { name: "Octopus", image: OctobusImage},
    { name: "Lobster", image: LobsterImage},
  ],
  poultryMeat: [
    { name: "Chicken (Whole - With/Without Skin)", image: ChickenwholeImage},
    { name: "Chicken Lollipop", image: ChickenlollipopImage},
    { name: "Chicken Wings", image: ChickenwingsImage},
    { name: "Chicken Curry Cut", image: ChhickencurrycutImage},
    { name: "Buffalo Boneless Curry Cut ", image: BuffalobonelessImage},  
  ],
  readyToFry: [
    { name: "Popcorn Chicken", image: PopcornChickenImage},
    { name: "Popcorn Prawns", image: popcornPrawnsImage},
    { name: "Parota", image: ParotaImage },
    { name: "Cutlets", image: CutletImage, variants: ["veg", "nonveg"] },
    { name: "Samosa", image: SamoosaImage, variants: ["veg", "nonveg"] },
    { name: "Nuggets", image: NuggetsImage, variants: ["veg", "nonveg"] },
    { name: "Spring Rolls", image: SpringRollsImage, variants: ["veg", "nonveg"] },
    { name: "Momos ", image: MomosImage, variants: ["veg", "nonveg"] },
    { name: "Burger Patties", image: BurgerPattiesImage, variants: ["veg", "nonveg"] },
    { name: "French Fries", image: FrenchfriesImage},
  ],
  vegetables: [
    { name: "Green Peas", image: GreenpeasImage},
    { name: "Sweet Corn", image: SweetcornImage },
    { name: "Paneer", image: PaneerImage},
    { name: "Butter", image: ButterImage},
  ],
};

const ProductGallery = () => {
  return (
    <section id="products" className="py-20 px-4 bg-secondary/5">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Our Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our extensive range of premium frozen products, from fresh seafood to ready-to-cook delights
          </p>
        </div>

          <Tabs defaultValue="seafoods" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
            <TabsTrigger value="seafoods">Seafoods</TabsTrigger>
            <TabsTrigger value="poultryMeat">Poultry & Meat</TabsTrigger>
            <TabsTrigger value="readyToFry">Ready to Fry</TabsTrigger>
            <TabsTrigger value="vegetables">Vegetables</TabsTrigger>
          </TabsList>

          <TabsContent value="seafoods" className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {products.seafoods.map((product, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="aspect-square overflow-hidden bg-muted">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-sm text-foreground text-center">
                        {product.name}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

           <TabsContent value="poultryMeat" className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {products.poultryMeat.map((product, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="aspect-square overflow-hidden bg-muted">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-sm text-foreground text-center">
                        {product.name}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

         <TabsContent value="readyToFry" className="mt-6">
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
    {products.readyToFry.map((product, index) => (
      <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
        <CardContent className="p-0">
          <div className="aspect-square overflow-hidden bg-muted relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />

            {/* MULTI VARIANT (veg + non-veg) */}
            {product.variants ? (
              <div className="absolute top-2 right-2 flex gap-1">
                <Badge className="bg-green-600 text-white border-0 text-xs">VEG</Badge>
                <Badge className="bg-red-600 text-white border-0 text-xs">NON-VEG</Badge>
              </div>
            ) : null}
          </div>

          <div className="p-4">
            <h3 className="font-semibold text-sm text-foreground text-center">
              {product.name}
            </h3>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
</TabsContent>

<TabsContent value="vegetables" className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {products.vegetables.map((product, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="aspect-square overflow-hidden bg-muted">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-sm text-foreground text-center">
                        {product.name}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProductGallery;
