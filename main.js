var config = {
  type: Phaser.AUTO,
  parent: "gameWrapper",
  width: 800,
  height: 400,
  scene: {
    create: create,
  },
  scale: {
    mode: Phaser.Scale.NONE,
  },
};

var game = new Phaser.Game(config);

function create() {
  PHASER = this;
  this.cameras.main.backgroundColor.setTo(100, 100, 100);

  const container = this.add.container();
  const hitArea = new Phaser.Geom.Rectangle(50, 50, 100, 100);
  const graphics = this.add.graphics();
  graphics.fillRectShape(hitArea);
  graphics.fillStyle(0xff00ff, 0.4);
  graphics.x += 1;
  container.add(graphics);

  graphics.setInteractive({
    hitArea,
    hitAreaCallback: Phaser.Geom.Rectangle.Contains,
    useHandCursor: false,
  });

  graphics.on("pointerdown", (pointer, localX, localY, event) => {
    this.scale.startFullscreen();
    console.warn(pointer);
  });
}
