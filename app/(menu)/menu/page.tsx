"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Utensils, Leaf, Coffee, Wine, Sparkles, ChefHat, Star } from "lucide-react";

const Foods = () => {
  const [activeTab, setActiveTab] = useState("starters");

  const tabs = [
  { id: "starters", label: "Starters", icon: Utensils },
  { id: "recommendations", label: "Chef's Specials", icon: ChefHat },
  { id: "main", label: "Main Course", icon: Sparkles },
  { id: "vegetarian", label: "Vegetarian", icon: Leaf },
  { id: "kids", label: "Kids Menu", icon: Star },
  { id: "sides", label: "Sides", icon: Utensils },
  { id: "desserts", label: "Desserts", icon: Sparkles },
  { id: "tea", label: "Tea & Coffee", icon: Coffee },
  { id: "soft", label: "Beverages", icon: Wine },
  { id: "beers", label: "Beers", icon: Wine },
];

const menuData = {
  starters: [
    { name: "Lentil Soup",
       desc: "Exotic lentil soup with fresh coriander and cream",
        price: "€8.00", 
       image: "/public/menu" },
    { name: "Hot & Sour Soup", 
      desc: "Traditional Indian chicken soup with spicy flavor", 
      price: "€8.50",
       image: "/public/menu" },
    { name: "Nepali Noodle Soup",
       desc: "Nepalese noodle soup",
        price: "€8.00", 
       image: "/public/menu" },
    { name: "Mix Starter (Veg)",
       desc: "Veg momo, samosa & pakora",
        price: "€12.50",
        image: "/public/menu" },
    { name: "Samosa Chat", 
      desc: "Samosa topped with sweet yogurt & chutney",
       price: "€11.50", image: "/public/menu" },
    { name: "Vegetarian Momos (6 pcs)",
       desc: "Traditional Nepalese dumplings filled with vegetables",
        price: "€10.50",
        image: "/public/menu" },
    { name: "Vegetarian Momos (8 pcs)",
       desc: "Traditional Nepalese dumplings filled with vegetables (20 min)",
        price: "€13.00", image: "/public/menu" },
    { name: "Spicy & Flavourful Aloo",
       desc: "With Nepalese potatoes",
        price: "€11.50", image: "/public/menu" },
    { name: "Paneer Tikka",
       desc: "Marinated in spices",
        price: "€15.50",
        image: "/public/menu" },
    { name: "Mix Starter (Non-Veg)", 
      desc: "Combination of chicken tikka, samosa & momo", 
      price: "€13.50", image: "/public/menu" },
    { name: "Momo (6 pcs)", 
      desc: "Traditional Nepalese dumplings filled with minced meat and spices",
       price: "€12.50", image: "/public/menu" },
    { name: "Momo (8 pcs)",
       desc: "Traditional Nepalese dumplings filled with minced meat and spices (20 min)",
       price: "€14.50",
       image: "/public/menu" },
    { name: "Chicken Chilli",
       desc: "Flavoursome blend of garlic, Nepalese spices and smoked chicken", 
      price: "€12.50",
       image: "/public/menu" },
    { name: "Garlic King Prawn", 
      desc: "Marinated king prawn with garlic & spices", price: "€14.50", image: "/public/menu" },
    { name: "Nepali Chat Patel", desc: "Nepal's most iconic street food with puffed rice", price: "€11.50", image: "/public/menu" },
    { name: "Gurkha Chicken Wings With Himalaya Herbs", desc: "Hot & sour chicken wings with Himalaya herbs", price: "€13.50", image: "/public/menu" },
    { name: "Chef Grill (Mini Mixed Grill Lamb, Chicken & King Prawn)", desc: "Mini mixed grill", price: "€15.50", image: "/public/menu" }
  ],
  recommendations: [
    { name: "Duck Honey Korma",
       desc: "Duck meat cooked in creamy sauce with mild Indian spices", 
       price: "€21.50",
        image: "/public/menu" },
    { name: "Chicken Mango",
       desc: "Chicken cooked with creamy texture of mango & a touch of curry cream sauce", 
       price: "€18.50",
       image: "/public/menu" },
    { name: "Chicken Saffron Korma", desc: "Chicken cooked in mild creamy sauce, saffron & coconut",
       price: "€19.50", image: "/public/menu" },
    { name: "Rich Creamy Sauce & Minced Meat",
       desc: "Tandoori chicken mince meat topped with creamy rich sauce", price: "€19.90", 
      image: "/public/menu" },
    { name: "Luka Chicken Mushroom", 
      desc: "Onions & bell pepper in a slightly spicy sauce with mushrooms", price: "€19.90",
       image: "/public/menu" }
  ],
  main: [
    { name: "Tikka Masala (Chicken)", 
      desc: "Grilled in tandoori oven. Ripe in traditional rich cashew, almond, tomato, bell pepper sauce",
       price: "€18.50", image: "/public/menu" },
    { name: "Tikka Masala (Lamb)", desc: "Grilled in tandoori oven. Ripe in traditional rich cashew, almond, tomato, bell pepper sauce",
       price: "€20.50", image: "/public/menu" },
    { name: "Tikka Masala (King Prawn)", 
      desc: "Grilled in tandoori oven. Ripe in traditional rich cashew, almond, tomato, bell pepper sauce", price: "€21.50",
       image: "/public/menu" },
    { name: "Vindaloo (Chicken)", desc: "Extremely hot lamb/king prawn sauce with potatoes & rich tomato flavour, garnished with fresh herbs", 
      price: "€18.50",
       image: "/public/menu" },
    { name: "Vindaloo (Lamb)",
       desc: "Extremely hot lamb/king prawn sauce with potatoes & rich tomato flavour, garnished with fresh herbs", 
      price: "€20.50",
       image: "/public/menu" },
    { name: "Vindaloo (King Prawn)", 
      desc: "Extremely hot lamb/king prawn sauce with potatoes & rich tomato flavour, garnished with fresh herbs", price: "€21.50",
       image: "/public/menu" },
    { name: "Madras (Chicken)",
       desc: "Rich chicken/lamb sauce cooked in rich tomato",
       price: "€19.50", image: "/public/menu" },
    { name: "Madras (Lamb)",
       desc: "Rich chicken/lamb sauce cooked in rich tomato",
       price: "€21.00", image: "/public/menu" },
    { name: "Himalayan Curry Special (Chicken)", desc: "Classical curry dish prepared with Himalayan herbs & spices", price: "€18.20",
       image: "/public/menu" },
    { name: "Himalayan Curry Special (Lamb)", desc: "Classical curry dish prepared with Himalayan herbs & spices", price: "€20.20",
       image: "/public/menu" },
    { name: "Butter Chicken",
       desc: "Tomato sauce with creamy texture of butter, almond, cashew nuts", price: "€18.90", image: "/public/menu" },
    { name: "Scampi Look Masala",
       desc: "Prawns cooked in creamy curry sauce with fresh garlic", 
      price: "€21.50",
       image: "/public/menu" },
    { name: "Goan Fish Curry", 
      desc: "Exotic blend of coconut milk & Himalayan spices",
       price: "€21.50",
        image: "/public/menu" },
    { name: "Himalayan Mix Sizzler",
       desc: "Lamb tikka, chicken tikka & king prawn tandoori",
       price: "€30.90",
        image: "/public/menu" },
    { name: "Chicken Tikka",
       desc: "Marinated chicken legs with Indian herbs & spices",
       price: "€26.90", 
       image: "/public/menu" },
    { name: "King Prawn Tandoori",
       desc: "Marinated tiger prawns baked in tandoori oven",
       price: "€29.90", 
       image: "/public/menu" },
    { name: "Royal Fish Sizzler",
       desc: "Sea bass marinated with Nepalese spices & herbs", 
      price: "€28.90", 
      image: "/public/menu" },
    { name: "Menu Bay of Bengal (Fish Menu, per person)",
       desc: "Aperitif Maison with papadom, Sea Food Soup, Garlic King Prawn, Royal Fish Sizzler, Dessert to choose, Tea or Coffee",
       price: "€62.50", 
      image: "/public/menu" },
    { name: "Menu Himalaya (Non-Veg Menu, per person)",
       desc: "Aperitif Maison with papadom, Chicken Soup, Mix Momo, Tandoori Mix Sizzler, Dessert to choose, Tea or Coffee",
       price: "€59.50", 
      image: "/public/menu" }
  ],
  vegetarian: [
    { name: "Vegan Tikka Masala", 
      desc: "Smooth vegan with home-made curry paste, vegan yogurt and coconut cream",
       price: "€17.90", 
      image: "/public/menu" },
    { name: "Mushroom Okra Bhaaji", desc: "Stir fried okra & mushrooms cooked with tomato, onion, herbs & spices",
       price: "€16.90",
       image: "/public/menu" },
    { name: "Aloo Matar",
       desc: "Green peas and potatoes cooked in curry with fresh herbs", price: "€16.90", image: "/public/menu" },
    { name: "Mix Veg Vindaloo", desc: "Traditional hot spicy dish on base of onion gravy, tomatoes & hot spices",
       price: "€16.90",
       image: "/public/menu" },
    { name: "Saag Aloo Corn Palak",
       desc: "Spinach cooked with corn palak with a touch of garlic", 
      price: "€16.90", image: "/public/menu" },
    { name: "Tofu Mango Curry",
       desc: "Fresh tofu cooked in sweet mango sauce",
       price: "€16.90",
       image: "/public/menu" },
    { name: "Paneer Tikka Masala",
       desc: "Indian cottage cheese prepared with cashew nuts, almonds & traditional creamy sauce",
       price: "€16.90", image: "/public/menu" },
    { name: "Palak Paneer",
       desc: "Gravy of spinach & Indian spices with creamy", 
      price: "€16.90", 
      image: "/public/menu" },
    { name: "Mixed Vegetable Curry",
       desc: "Creamy spices cooked in curry sauce",
       price: "€16.90",
       image: "/public/menu" },
    { name: "Paneer Oyster Mushroom", 
      desc: "Paneer & oyster mushroom cooked with tomato, onion, herbs & spices",
       price: "€18.50",
       image: "/public/menu" },
    { name: "Baingan Bharta", 
      desc: "Grilled eggplant flesh cooked with green, onions & herbs",
       price: "€16.90", 
      image: "/public/menu" },
    { name: "Aloo Gobi",
       desc: "Indian vegetarian dish made with potatoes & cauliflower", 
      price: "€16.90", 
      image: "/public/menu" },
    { name: "Veg Safran (Veg)",
       desc: "Cooked with aromatic basmati rice, green peas",
       price: "€20.90", image: "/public/menu" },
    { name: "Jogi Menu (Veg Menu, per person)",
       desc: "Aperitif Maison with papadom, Veg Soup, Mix Starter Veg, Vegetarian Thali, Dessert to choose, Tea or Coffee", 
      price: "€52.50",
       image: "/public/menu" }
  ],
  kids: [],
  sides: [
    { name: "Basmati Rice",
       desc: "Steamed basmati rice",
       price: "€3.00", image: "/public/menu" },
    { name: "Pilau Rice",
       desc: "Basmati rice cooked with saffron & dry fruits",
       price: "€6.50", image: "/public/menu" },
    { name: "Butter Naan",
       desc: "Leavened bread baked in clay oven",
       price: "€3.50", image: "/public/menu" },
    { name: "Roti", 
      desc: "Whole wheat bread", price: "€3.00",
       image: "/public/menu" },
    { name: "Garlic Naan",
       desc: "Naan topped with garlic & butter", 
      price: "€4.50", image: "/public/menu" },
    { name: "Cheese Naan", 
      desc: "Naan stuffed with cheese", 
      price: "€4.90", image: "/public/menu" },
    { name: "Peshwari Naan",
       desc: "Naan stuffed with almond, raisins & coconut",
       price: "€5.50", image: "/public/menu" },
    { name: "Plain Naan", desc: "Leavened bread baked in clay oven", price: "€3.50", image: "/public/menu" },
    { name: "Olive Naan", desc: "Naan topped with olives", price: "€4.90", image: "/public/menu" }
  ],
  desserts: [],
  tea: [
    { name: "Coffee", desc: "Freshly brewed coffee", price: "€3.50", image: "/public/menu" },
    { name: "Decaffeine", desc: "Decaf coffee", price: "€3.50", image: "/public/menu" },
    { name: "Espresso", desc: "Strong espresso shot", price: "€4.20", image: "/public/menu" },
    { name: "Fresh Mint Tea", desc: "Refreshing mint tea", price: "€4.30", image: "/public/menu" },
    { name: "Masala Chai", desc: "Traditional Indian spiced tea", price: "€4.30", image: "/public/menu" },
    { name: "Black Tea with Nepalese Herbs", desc: "Nepalese herbal black tea", price: "€4.90", image: "/public/menu" },
    { name: "Mustang Coffee & Whipped Cream", desc: "Nepal rum, coffee & whipped cream", price: "€8.50", image: "/public/menu" }
  ],
  soft: [
    { name: "SPA Plat Bruis 25cl", desc: "Sparkling water", price: "€3.50", image: "/public/menu" },
    { name: "SPA Plat Bruis 50cl", desc: "Sparkling water", price: "€5.90", image: "/public/menu" },
    { name: "Cola/Tea Zero/Fanta", desc: "Soft drinks", price: "€3.90", image: "/public/menu" },
    { name: "Tonic Juice", desc: "Tonic water", price: "€3.90", image: "/public/menu" },
    { name: "Orange Juice", desc: "Fresh orange juice", price: "€3.90", image: "/public/menu" },
    { name: "Lassi Mango", desc: "Mango lassi drink", price: "€5.50", image: "/public/menu" },
    { name: "Lassi Nature/Sweet/Salt", desc: "Traditional lassi", price: "€4.60", image: "/public/menu" },
    { name: "Vegan Lassi", desc: "Vegan yogurt, mango & coconut milk", price: "€6.50", image: "/public/menu" },
    { name: "Aperitif Maison", desc: "Aperitif, gin, lemon & ice", price: "€9.50", image: "/public/menu" },
    { name: "Gurkha Punch", desc: "Nepali rum, honey & cloves warm", price: "€8.90", image: "/public/menu" },
    { name: "Khukuri Rum", desc: "Rum from Nepal 60ml", price: "€6.50", image: "/public/menu" },
    { name: "Kir", desc: "Classic kir", price: "€7.50", image: "/public/menu" },
    { name: "Campari Royal 60ml", desc: "Campari cocktail", price: "€7.40", image: "/public/menu" },
    { name: "Martini Red/White", desc: "Martini vermouth", price: "€7.80", image: "/public/menu" },
    { name: "Sherry Red/White", desc: "Sherry wine", price: "€7.40", image: "/public/menu" },
    { name: "Ricard 80ml / Bacardi 60ml", desc: "Anise liqueur or rum", price: "€7.50", image: "/public/menu" },
    { name: "Vodka 60ml", desc: "Vodka shot", price: "€7.50", image: "/public/menu" },
    { name: "Pisco Sour Orange NA", desc: "Non-alcoholic soft drink", price: "€3.50", image: "/public/menu" },
    { name: "Mojito", desc: "Fresh mint, lime, soda, sugar syrup", price: "€9.90", image: "/public/menu" },
    { name: "Virgin Mojito", desc: "Non-alcoholic mojito", price: "€9.50", image: "/public/menu" },
    { name: "Negroni", desc: "Lemon, soda, simple syrup ice", price: "€9.80", image: "/public/menu" },
    { name: "Aperol Spritz", desc: "Aperol, spritz martini ice", price: "€9.90", image: "/public/menu" },
    { name: "Cuba Libre", desc: "Rum, lime, soda & ice", price: "€9.50", image: "/public/menu" },
    { name: "Caipirinha", desc: "Lime, sugar ice", price: "€9.50", image: "/public/menu" },
    { name: "Gin Tonic", desc: "Gin, tonic & ice", price: "€10.50", image: "/public/menu" },
    { name: "Amaretto 60ml", desc: "Almond liqueur digestif", price: "€7.50", image: "/public/menu" },
    { name: "Cointreau 60ml", desc: "Orange liqueur", price: "€7.90", image: "/public/menu" },
    { name: "Baileys Mariner 60ml", desc: "Cream liqueur", price: "€7.90", image: "/public/menu" },
    { name: "Cognac Bisquit 60ml", desc: "Cognac digestif", price: "€8.90", image: "/public/menu" },
    { name: "House Wine (Red/White/Rose) Glass", desc: "House wine by the glass", price: "€6.90", image: "/public/menu" },
    { name: "House Wine Half Liter", desc: "House wine half bottle", price: "€19.50", image: "/public/menu" },
    { name: "House Wine Bottle 75cl", desc: "House wine full bottle", price: "€28.90", image: "/public/menu" },
    { name: "Himalaya Chardonnay Viura", desc: "White wine with fruity notes of lemon, pineapple and jasmine", price: "€35.00", image: "/public/menu" },
    { name: "Sula Vineyards Sauvignon Blanc", desc: "Indian white wine", price: "€39.50", image: "/public/menu" },
    { name: "Los Vascos Chardonnay", desc: "Chilean white wine, 100% Chardonnay", price: "€43.50", image: "/public/menu" },
    { name: "Pouilly Fume la Croix Grimault", desc: "French white wine, 100% Sauvignon Blanc", price: "€59.50", image: "/public/menu" },
    { name: "Himalaya Tempranillo", desc: "Red wine with black plums, raisins, dates and spices", price: "€35.50", image: "/public/menu" },
    { name: "Sula Vineyards Rood", desc: "Indian red wine Zinfandel", price: "€39.50", image: "/public/menu" },
    { name: "Los Vascos Cabernet Sauvignon", desc: "Chilean red wine, 100% Cabernet Sauvignon", price: "€43.50", image: "/public/menu" },
    { name: "Piendra Negra Malbec Reserva", desc: "Argentine red wine Malbec Reserve", price: "€44.50", image: "/public/menu" },
    { name: "Jacobs Creek Bubbles", desc: "Australian sparkling wine", price: "€38.50", image: "/public/menu" },
    { name: "Chandon Brut", desc: "French champagne, 2nd oldest of the region", price: "€85.50", image: "/public/menu" }
  ],
  beers: [
    { name: "Stella 25cl", desc: "5.2% ABV", price: "€3.80", image: "/public/menu" },
    { name: "Hoegaarden 25cl/33cl", desc: "4.9% ABV", price: "€4.30", image: "/public/menu" },
    { name: "Duvel Blonde 33cl", desc: "8.5% ABV", price: "€6.00", image: "/public/menu" },
    { name: "Leffe Brun 33cl", desc: "8.5% ABV", price: "€6.00", image: "/public/menu" },
    { name: "Kriek Belle Vue 25cl", desc: "4.1% ABV", price: "€4.90", image: "/public/menu" },
    { name: "Stella NA 25cl", desc: "0% ABV", price: "€3.80", image: "/public/menu" },
    { name: "Kingfisher / Cobra", desc: "Indian beer 33cl 4.5% ABV", price: "€5.50", image: "/public/menu" },
    { name: "Nepali Beer 33cl", desc: "5.3% ABV", price: "€5.50", image: "/public/menu" },
    { name: "Gents Tripel 33cl", desc: "Local beer 8.0% ABV", price: "€6.50", image: "/public/menu" },
    { name: "Gents Strop 33cl", desc: "Local beer 6.9% ABV", price: "€6.50", image: "/public/menu" },
    { name: "Chivas Regal 12 years 60ml", desc: "Whisky", price: "€9.50", image: "/public/menu" },
    { name: "Johnnie Walker Black 60ml", desc: "Whisky", price: "€9.50", image: "/public/menu" },
    { name: "Glenfiddich 12 years 60ml", desc: "Whisky", price: "€9.50", image: "/public/menu" },
    { name: "Old Dunbar 60ml", desc: "Nepali whisky", price: "€9.50", image: "/public/menu" }
  ]
};

  const currentLabel = tabs.find((t) => t.id === activeTab)?.label || "";
  const Icon = tabs.find((t) => t.id === activeTab)?.icon || Utensils;

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <Navbar/>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black/80 via-black/60 to-black/80">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwxNTIsMCwwLjEpIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        </div>
        <div className="relative mx-auto max-w-screen-lg w-full min-h-[50vh] flex flex-col justify-center items-center text-white text-center px-4 pt-16">
          <div className="mb-6">
            <Sparkles className="w-16 h-16 text-orange-400 mx-auto animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-orange-300 via-amber-200 to-orange-300 bg-clip-text text-transparent">
            A LA CARTE MENU
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
            Authentic Himalayan & Indian Cuisine
          </p>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="w-screen-xl w-full mx-auto p-4 pb-16 -mt-8">
        <div className="w-5xl ">
          {/* Tab Navigation */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-orange-100">
            <div className="grid grid-cols-2 md:grid-cols-10 gap-10">
              {tabs.map((tab) => {
                const TabIcon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex flex-col items-center justify-center px-4 py-4 text-sm font-medium border-b-4 ${
                      activeTab === tab.id
                        ? "bg-amber-600 text-white border-orange-600 shadow-lg scale-105"
                        : "text-gray-600 hover:bg-orange-50 hover:text-orange-600 border-transparent"
                    }`}
                  >
                    <TabIcon className={`w-5 h-5 mb-1 ${activeTab === tab.id ? 'animate-bounce' : ''}`} />
                    <span className="text-xs md:text-sm">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-8 bg-white rounded-xl shadow-xl p-8 border border-orange-100">
            <div className="flex items-center gap-3 mb-8 pb-6 border-b-2 border-orange-200">
              <Icon className="w-10 h-10 text-orange-600" />
              <h2 className="text-4xl font-bold text-gray-800 capitalize">
                {currentLabel}
              </h2>
            </div>
            
            {menuData[activeTab as keyof typeof menuData]?.length > 0 ? (
              <div className="grid gap-6">
                {menuData[activeTab as keyof typeof menuData]?.map((item, index) => (
                  <div
                    key={index}
                    className="group bg-gradient-to-r from-white to-orange-50 rounded-2xl p-6 shadow-md border-2 border-orange-100 hover:border-orange-300 hover:shadow-2xl transition-all duration-300 flex items-center gap-6 hover:scale-[1.02]"
                  >
                    <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0  duration-300"></div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 duration-300">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-3 text-sm md:text-base">
                        {item.desc}
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="h-1 w-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
                        <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                          {item.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Sparkles className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-xl italic">Coming soon...</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Foods;