<template>
  <div>
    <canvas id="animated-canvas" class="w-full h-full"></canvas>
  </div>
</template>

<script>
const Sprite = {
  x: 0,
  y: 0,
  vx: 0.25,
  vy: 0.25,
  width: 0,
  height: 0,
  fill: 'rgba(0, 0, 0, 0)',
  stroke: 'rgba(0, 0, 0, 0)',
  rotateAngle: 0,
  rotation: 0,
  radius: 0,
  draw(canvas, render) {
    const context = canvas.getContext('2d')

    this.x += this.vx
    this.y += this.vy
    this.rotateAngle += this.rotation

    if (!this.radius) {
      if (this.x + this.width >= canvas.width || this.x <= 0) this.invertX()
      if (this.y + this.height >= canvas.height || this.y <= 0) this.invertY()
    } else {
      if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0)
        this.invertX()
      if (this.y + this.radius >= canvas.height || this.y - this.radius <= 0)
        this.invertY()
    }

    let centerX = this.x,
      centerY = this.y
    if (!this.radius) {
      centerX = this.x + this.width / 2
      centerY = this.y + this.height / 2
    }

    context.translate(centerX, centerY)
    // convert from degrees to radians
    context.rotate((this.rotateAngle * Math.PI) / 180)
    // reset the translation origin
    context.translate(-centerX, -centerY)

    context.fillStyle = this.fill
    context.strokeStyle = this.stroke

    render(this)

    context.fill()
    context.stroke()

    // reset the transformation matrix
    context.setTransform(1, 0, 0, 1, 0, 0)
  },
  invertX() {
    this.vx = -this.vx
  },
  invertY() {
    this.vy = -this.vy
  },
  realign(canvas) {
    if (this.x - this.width <= 0) this.x = this.width
    if (this.y - this.height <= 0) this.y = this.height
    if (this.x + this.width >= canvas.width) this.x = canvas.width - this.width
    if (this.y + this.height >= canvas.height)
      this.y = canvas.height - this.height
  },
}

export default {
  name: 'AnimatedCanvas',
  data() {
    return {
      canvas: null,
      context: null,
      fps: 50 / 3, // 60 fps

      images: [],

      primaryGradient: null,
      boxSprite: Object.create(Sprite),
      circleSprite: Object.create(Sprite),
      triangleSprite: Object.create(Sprite),
    }
  },
  methods: {
    update() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)

      this.boxSprite.draw(this.canvas, this.boxDraw)
      this.circleSprite.draw(this.canvas, this.circleDraw)
      this.triangleSprite.draw(this.canvas, this.triangleDraw)
    },
    boxDraw() {
      this.context.fillRect(
        this.boxSprite.x,
        this.boxSprite.y,
        this.boxSprite.width,
        this.boxSprite.height
      )
    },
    circleDraw() {
      this.context.beginPath()
      this.context.arc(
        this.circleSprite.x,
        this.circleSprite.y,
        this.circleSprite.radius,
        0,
        2 * Math.PI
      )
      this.context.closePath()
    },
    triangleDraw() {
      const height = (Math.sqrt(3) / 2) * this.triangleSprite.width

      this.context.beginPath()
      this.context.moveTo(this.triangleSprite.x, this.triangleSprite.y)
      this.context.lineTo(
        this.triangleSprite.x + this.triangleSprite.width / 2,
        this.triangleSprite.y + height
      )
      this.context.lineTo(
        this.triangleSprite.x + this.triangleSprite.width,
        this.triangleSprite.y
      )
      this.context.closePath()
    },
    handleResize() {
      const style = getComputedStyle(this.canvas)
      this.canvas.width = parseInt(style.getPropertyValue('width'), 10)
      this.canvas.height = parseInt(style.getPropertyValue('height'), 10)

      this.boxSprite.realign(this.canvas)
      this.circleSprite.realign(this.canvas)
      this.triangleSprite.realign(this.canvas)
    },
  },
  mounted() {
    this.canvas = document.getElementById('animated-canvas')
    this.context = this.canvas.getContext('2d')

    window.addEventListener('resize', this.handleResize)
    this.handleResize()

    // initial settings
    this.primaryGradient = this.context.createLinearGradient(0, 0, 100, 0)
    this.primaryGradient.addColorStop(0, '#F78996')
    this.primaryGradient.addColorStop(1, '#FAB7AC')

    this.boxSprite.fill = this.primaryGradient
    this.boxSprite.x = 400
    this.boxSprite.y = 400
    this.boxSprite.rotation = 0.2
    this.boxSprite.width = 150
    this.boxSprite.height = 150

    this.circleSprite.fill = this.primaryGradient
    this.circleSprite.rotation = -0.2
    this.circleSprite.vx = -this.circleSprite.vx
    this.circleSprite.radius = 150
    this.circleSprite.width = 300
    this.circleSprite.height = 300
    this.circleSprite.x = this.canvas.width / 2
    this.circleSprite.y = this.canvas.height / 2

    this.triangleSprite.fill = this.primaryGradient
    this.triangleSprite.x = this.canvas.width / 2 + 200
    this.triangleSprite.y = this.canvas.width / 2 - 200
    this.triangleSprite.vx = -this.triangleSprite.vx
    this.triangleSprite.vy = -this.triangleSprite.vy
    this.triangleSprite.rotation = -0.1
    this.triangleSprite.width = 200
    this.triangleSprite.height = 200

    setInterval(this.update, this.fps)
  },
}
</script>
