import { MongoClient, ServerApiVersion } from 'mongodb'

const client = new MongoClient(process.env.MONGODB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("joes-robot-shop").collection("products");

  collection.insertMany([
    {
      id: '53f1e589-ebe2-4473-b5c2-01fb3c72cc34',
      description:
        "A robot head with an unusually large eye and teloscpic neck -- excellent for exploring high spaces.",
      name: "Large Cyclops",
      imageName: "head-big-eye.png",
      category: "Heads",
      price: 1220.5,
      discount: 0.2,
    },
    {
      id: 'fb019c9f-6167-4b83-994c-1da882ea8564',
      description: "A spring base - great for reaching high places.",
      name: "Spring Base",
      imageName: "base-spring.png",
      category: "Bases",
      price: 1190.5,
      discount: 0,
    },
    {
      id: '460998f9-53f0-4a40-a2af-2adb689c3529',
      description:
        "An articulated arm with a claw -- great for reaching around corners or working in tight spaces.",
      name: "Articulated Arm",
      imageName: "arm-articulated-claw.png",
      category: "Arms",
      price: 275,
      discount: 0,
    },
    {
      id: '8fa61ea0-dbcd-486c-a5a2-9e462b856d96',
      description:
        "A friendly robot head with two eyes and a smile -- great for domestic use.",
      name: "Friendly Bot",
      imageName: "head-friendly.png",
      category: "Heads",
      price: 945.0,
      discount: 0.2,
    },
    {
      _id: 'afd37cb9-844a-473f-ac10-4de70ce9a7f7',
      description:
        "A large three-eyed head with a shredder for a mouth -- great for crushing light medals or shredding documents.",
      name: "Shredder",
      imageName: "head-shredder.png",
      category: "Heads",
      price: 1275.5,
      discount: 0,
    },
    {
      _id: 'bae330bc-86d4-46bf-a47e-181903ef967d',
      description:
        "A single-wheeled base with an accelerometer capable of higher speeds and navigating rougher terrain than the two-wheeled variety.",
      name: "Single Wheeled Base",
      imageName: "base-single-wheel.png",
      category: "Bases",
      price: 1190.5,
      discount: 0.1,
    },
    {
      _id: '5970281d-4566-45d7-a94c-1e4f19cf25e4',
      description: "A simple torso with a pouch for carrying items.",
      name: "Pouch Torso",
      imageName: "torso-pouch.png",
      category: "Torsos",
      price: 785,
      discount: 0,
    },
    {
      _id: 'b5720b50-3d5d-4ce6-a147-3b26345fb980',
      description:
        "An arm with two independent claws -- great when you need an extra hand. Need four hands? Equip your bot with two of these arms.",
      name: "Two Clawed Arm",
      imageName: "arm-dual-claw.png",
      category: "Arms",
      price: 285,
      discount: 0,
    },

    {
      _id: '4d57a8ea-607e-4cfc-9c0e-6a6cc2e4fc36',
      description: "A simple single-eyed head -- simple and inexpensive.",
      name: "Small Cyclops",
      imageName: "head-single-eye.png",
      category: "Heads",
      price: 750.0,
      discount: 0,
    },
    {
      _id: 'af589f80-ee73-46a8-bd5a-5d2bc47df248',
      description:
        "An arm with a propeller -- good for propulsion or as a cooling fan.",
      name: "Propeller Arm",
      imageName: "arm-propeller.png",
      category: "Arms",
      price: 230,
      discount: 0.1,
    },
    {
      _id: 'dc8412de-9aab-4d13-95d1-a4e842660927',
      description: "A rocket base capable of high speed, controlled flight.",
      name: "Rocket Base",
      imageName: "base-rocket.png",
      category: "Bases",
      price: 1520.5,
      discount: 0,
    },
    {
      _id: '3b150f11-2338-4a5a-97d8-c37e43d7b1ba',
      description: "A short and stubby arm with a claw -- simple, but cheap.",
      name: "Stubby Claw Arm",
      imageName: "arm-stubby-claw.png",
      category: "Arms",
      price: 125,
      discount: 0,
    },
    {
      _id: 'da4dc00d-cd3a-49dd-a8c0-3c4fe93fb63b',
      description:
        "A torso that can bend slightly at the waist and equiped with a heat guage.",
      name: "Flexible Gauged Torso",
      imageName: "torso-flexible-gauged.png",
      category: "Torsos",
      price: 1575,
      discount: 0,
    },
    {
      _id: '1d96b4c2-f435-4637-bb23-5eda70d54baa',
      description: "A two wheeled base with an accelerometer for stability.",
      name: "Double Wheeled Base",
      imageName: "base-double-wheel.png",
      category: "Bases",
      price: 895,
      discount: 0,
    },
    {
      _id: 'cda0e671-1739-48e1-ac57-46213afbdf2d',
      description:
        "A robot head with three oscillating eyes -- excellent for surveillance.",
      name: "Surveillance",
      imageName: "head-surveillance.png",
      category: "Heads",
      price: 1255.5,
      discount: 0,
    },
    {
      _id: '1f981d49-66f2-4520-8e92-d80bb7634825',
      description: "A telescoping arm with a grabber.",
      name: "Grabber Arm",
      imageName: "arm-grabber.png",
      category: "Arms",
      price: 205.5,
      discount: 0,
    },
    {
      _id: 'a30d6d56-8f1f-4f1a-b58c-dba83dc4e8b7',
      description: "A less flexible torso with a battery gauge.",
      name: "Gauged Torso",
      imageName: "torso-gauged.png",
      category: "Torsos",
      price: 1385,
      discount: 0,
    },
    {
      _id: '0febd819-048f-4ed6-9174-2b39fceed44f',
      description:
        "An inexpensive three-wheeled base. only capable of slow speeds and can only function on smooth surfaces.",
      name: "Triple Wheeled Base",
      imageName: "base-triple-wheel.png",
      category: "Bases",
      price: 700.5,
      discount: 0,
    },
  ]).then(() => client.close())


});