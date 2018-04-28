/*
  Reference
  Engine - Updates simulations of a matter.js world.
  World - A composite that provides methods & properties to create & manipulate whole worlds at once.
  Bodies - Provides methods to create rigid bodies with common shapes.
  Body - Provides methods & properties to create & manipulate bodies you have made.
  Composites - Contains different methods to create composite bodies with common settings.
  Composite - Contains methods & properties that allow you to create compositie bodies.
  Constraint - Allows you to create & manipulate constraints.
  
  var r1 = Bodies.rectangle(col1, 0, 50, 50);
  var r2 = Bodies.rectangle(col1, 150, 50, 50);
  var r3 = Bodies.rectangle(col1, 400, 50, 50);
  var r4 = Bodies.rectangle(col2, 250, 50, 50);
  var r5 = Bodies.rectangle(col3, 0, 50, 50);
  var r6 = Bodies.rectangle(col3, 150, 50, 50);
  var r7 = Bodies.rectangle(col3, 400, 50, 50);
  var r8 = Bodies.rectangle(col4, 250, 50, 50);
  var r9 = Bodies.rectangle(col4, 500, 50, 50);
  var cross = Bodies.rectangle(col3, 250, 100, 50, { isStatic: true });
  World.add(engine.world, [r1, r2, r3, r4, r5, r6, r7, r8, r9, cross, floor]);
*/

// Module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

// Create engine
var engine = Engine.create();

// Create renderer
var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    background: '#FFFBF5',
    width: 800,
    height: 600,
    wireframes: false
  }
});

// Columns
var col1 = 100;
    col2 = 300;
    col3 = 500;
    col4 = 700;

// Bodies
var floor = Bodies.rectangle(400, 600, 800, 100, {
    isStatic: true,
    render: {
      fillStyle: '#2A2111',
      strokeStyle: '#2A2111',
      lineWidth: 1
    }
});
var addRock = function () {
  var colList = [col1, col2, col3, col4];
  var ranCol = Math.floor((Math.random() * colList.length) );
  var colResult = colList[ranCol];
  console.log(colList[ranCol]);
  return Bodies.rectangle(colResult, 0, 50, 50, {
    render: {
      fillStyle: '#A3906D',
      strokeStyle: '#956C1F',
      lineWidth: 2
    }
  });
};
var addCross = function () {
  var colList = [col1, col2, col3, col4];
  var ranCol = Math.floor((Math.random() * colList.length) );
  var colResult = colList[ranCol];
  console.log(colList[ranCol]);
  return Bodies.rectangle(colResult, Math.random()*500 + 30, 100, 50, {
    isStatic: true,
    render: {
      fillStyle: '#956C1F',
      strokeStyle: '#2A2111',
      lineWidth: 2
    }
  });
};

// Add bodies onload
World.add(engine.world, [floor]);

// Run engine
Engine.run(engine);

// Run Renderer
Render.run(render);

// Add bodies onclick
$('.add-rock').on('click', function () {
  World.add(engine.world, addRock());
});
$('.add-cross').on('click', function () {
  World.add(engine.world, addCross());
})
$('.randomize').on('click', function () {
  World.add(engine.world, addCross());
  for(var i = 0; i < 10; i++) {
    World.add(engine.world, addRock());
  }
})
$('.reload').on('click', function () {
  location.reload();
})