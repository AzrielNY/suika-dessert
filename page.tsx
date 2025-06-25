import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [menu, setMenu] = useState([
    { name: "Croissant Original", price: "Rp15.000", desc: "Croissant renyah klasik dengan aroma mentega." },
    { name: "Croissant Strawberry & Cream", price: "Rp20.000", desc: "Isian krim stroberi segar. Varian: Choco, Vanilla, Matcha." },
    { name: "Croissant Choco Almond", price: "Rp22.000", desc: "Lapisan cokelat dan taburan almond renyah." },
    { name: "Croissant White Almond", price: "Rp22.000", desc: "Versi creamy dengan cokelat putih dan almond." },
    { name: "Pudding", price: "Rp12.000", desc: "Varian: Mangga Keju, Cokelat, Karamel." },
    { name: "Snow Milk Bun", price: "Rp14.000", desc: "Roti lembut dengan taburan gula salju dan krim susu." },
    { name: "Fruit Sando", price: "Rp18.000", desc: "Roti lapis buah segar dan krim manis ala Jepang." },
    { name: "Cromboloni", price: "Rp25.000", desc: "Croissant bomboloni unik. Varian: Vanilla, Tiramisu, Matcha, Cokelat." },
    { name: "Mochi", price: "Rp8.000", desc: "Kue kenyal khas Jepang. Varian: original, strawberry." },
  ]);

  return (
    <main className="min-h-screen bg-pink-50 text-gray-800 p-6">
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold text-pink-600">Suika Dessert 🍰 </h1>
        <p className="mt-2 text-lg">Aneka dessert manis untuk harimu yang manis~</p>
        <Button className="mt-4 bg-pink-500 hover:bg-pink-600 text-white text-sm">Pesan Sekarang</Button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
        {menu.map((item, idx) => (
          <Card key={idx} className="bg-white shadow-xl">
            <CardContent className="p-4">
              <h3 className="font-bold text-lg text-pink-600">{item.name}</h3>
              <p className="text-sm mt-1">{item.desc}</p>
              <p className="text-right mt-2 font-semibold">{item.price}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <footer className="text-center text-xs text-gray-500 mt-10">
        <p>Hubungi kami di WhatsApp/Instagram</p>
        <p>&copy; 2025 Suika Dessert</p>
      </footer>
    </main>
  );
}
