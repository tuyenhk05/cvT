/**
 * Kawaii Pink & Sakura Mechatronics 3D Scene (Three.js)
 * Features: Rose Gold Planetary Gimbal, Sweet Pulsing Heart Core, Floating Sakura Petal Particles
 */

(function () {
  const container = document.getElementById('three-canvas-container');
  if (!container || typeof THREE === 'undefined') return;

  let scene, camera, renderer;
  let mechaGroup, sakuraGroup;
  let mouseX = 0, mouseY = 0;
  let targetRotationX = 0, targetRotationY = 0;
  let windowHalfX = window.innerWidth / 2;
  let windowHalfY = window.innerHeight / 2;
  let clock = new THREE.Clock();

  function init() {
    try {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 30;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.25;
      container.appendChild(renderer.domElement);

      // Sweet Kawaii Ambient & Point Lighting
      const ambientLight = new THREE.AmbientLight(0x2d0d24, 2.8);
      scene.add(ambientLight);

      // Main Hot Pink Point Light
      const lightPink = new THREE.PointLight(0xff5ca8, 3.8, 65);
      lightPink.position.set(16, 14, 15);
      scene.add(lightPink);

      // Soft Sakura Peach Point Light
      const lightSakura = new THREE.PointLight(0xfda4af, 3.2, 55);
      lightSakura.position.set(-16, -12, 12);
      scene.add(lightSakura);

      // Warm Golden Honey Accent Light
      const lightGold = new THREE.PointLight(0xfde047, 2.2, 45);
      lightGold.position.set(0, 18, 8);
      scene.add(lightGold);

      // Mechatronics Core Group
      mechaGroup = new THREE.Group();
      const isDesktop = window.innerWidth > 992;
      mechaGroup.position.set(isDesktop ? 7.5 : 0, isDesktop ? 0 : -2.5, 0);
      scene.add(mechaGroup);

      // 1. Outer Rose-Gold Gear Ring
      const outerRingGeo = new THREE.TorusGeometry(8.2, 0.22, 16, 72);
      const outerRingMat = new THREE.MeshStandardMaterial({
        color: 0x9d174d,
        metalness: 0.85,
        roughness: 0.25
      });
      const outerRing = new THREE.Mesh(outerRingGeo, outerRingMat);
      mechaGroup.add(outerRing);

      // Outer Gear Teeth with Glowing Strawberry Accents
      const teethCount = 36;
      for (let i = 0; i < teethCount; i++) {
        const angle = (i / teethCount) * Math.PI * 2;
        const toothGeo = new THREE.BoxGeometry(0.28, 0.65, 0.28);
        const toothMat = new THREE.MeshStandardMaterial({
          color: 0xf472b6,
          metalness: 0.8,
          roughness: 0.2,
          emissive: 0xff5ca8,
          emissiveIntensity: 0.35
        });
        const tooth = new THREE.Mesh(toothGeo, toothMat);
        tooth.position.x = Math.cos(angle) * 8.5;
        tooth.position.y = Math.sin(angle) * 8.5;
        tooth.rotation.z = angle + Math.PI / 2;
        mechaGroup.add(tooth);
      }

      // 2. Middle Gimbal Ring (Soft Sakura Wireframe)
      const midGimbalGeo = new THREE.TorusGeometry(6.2, 0.16, 16, 60);
      const midGimbalMat = new THREE.MeshStandardMaterial({
        color: 0xfb7185,
        metalness: 0.6,
        roughness: 0.3,
        wireframe: true
      });
      const midGimbal = new THREE.Mesh(midGimbalGeo, midGimbalMat);
      midGimbal.rotation.x = Math.PI / 3;
      mechaGroup.add(midGimbal);

      // 3. Inner Satellite Gears
      for (let i = 0; i < 4; i++) {
        const planetAngle = (i / 4) * Math.PI * 2;
        const planetGeo = new THREE.CylinderGeometry(1.1, 1.1, 0.35, 18);
        const planetMat = new THREE.MeshStandardMaterial({
          color: 0x831843,
          metalness: 0.85,
          roughness: 0.25,
          wireframe: true,
          emissive: 0xdb2777,
          emissiveIntensity: 0.2
        });
        const planetMesh = new THREE.Mesh(planetGeo, planetMat);
        planetMesh.position.x = Math.cos(planetAngle) * 3.8;
        planetMesh.position.y = Math.sin(planetAngle) * 3.8;
        planetMesh.rotation.x = Math.PI / 2;
        planetMesh.name = 'gear_' + i;
        mechaGroup.add(planetMesh);
      }

      // 4. Central Crystalline Diamond Core
      const coreGeo = new THREE.OctahedronGeometry(2.3, 1);
      const coreMat = new THREE.MeshStandardMaterial({
        color: 0xff5ca8,
        wireframe: true,
        emissive: 0xff5ca8,
        emissiveIntensity: 0.6
      });
      const coreMesh = new THREE.Mesh(coreGeo, coreMat);
      mechaGroup.add(coreMesh);

      // Internal Sweet Nucleus
      const nucleusGeo = new THREE.SphereGeometry(1.2, 20, 20);
      const nucleusMat = new THREE.MeshBasicMaterial({ color: 0xffc0cb });
      const nucleus = new THREE.Mesh(nucleusGeo, nucleusMat);
      nucleus.name = 'nucleus';
      mechaGroup.add(nucleus);

      // 5. Floating Sakura Petal / Sparkle Constellation
      const petalCount = 320;
      const petalGeo = new THREE.BufferGeometry();
      const positions = new Float32Array(petalCount * 3);
      const velocities = [];

      for (let i = 0; i < petalCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 80;
        positions[i + 1] = (Math.random() - 0.5) * 60;
        positions[i + 2] = (Math.random() - 0.5) * 45;
        velocities.push({
          y: -(Math.random() * 0.02 + 0.008),
          x: Math.sin(i) * 0.005,
          rot: Math.random() * 0.02
        });
      }
      petalGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      // Create Cute Sakura/Star Radial Texture Canvas
      const pCanvas = document.createElement('canvas');
      pCanvas.width = 32;
      pCanvas.height = 32;
      const pCtx = pCanvas.getContext('2d');
      const grad = pCtx.createRadialGradient(16, 16, 0, 16, 16, 15);
      grad.addColorStop(0, 'rgba(255, 182, 193, 1)');
      grad.addColorStop(0.3, 'rgba(255, 92, 168, 0.85)');
      grad.addColorStop(0.7, 'rgba(251, 113, 133, 0.35)');
      grad.addColorStop(1, 'rgba(255, 92, 168, 0)');
      pCtx.fillStyle = grad;
      pCtx.beginPath();
      pCtx.arc(16, 16, 15, 0, Math.PI * 2);
      pCtx.fill();

      const pTexture = new THREE.CanvasTexture(pCanvas);
      const pMaterial = new THREE.PointsMaterial({
        size: 0.7,
        map: pTexture,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      const sakuraMesh = new THREE.Points(petalGeo, pMaterial);
      scene.add(sakuraMesh);

      // Listeners
      window.addEventListener('resize', onResize, false);
      document.addEventListener('mousemove', onMouseMove, false);
      document.addEventListener('touchmove', onTouchMove, { passive: true });

      function onResize() {
        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);

        const desktop = window.innerWidth > 992;
        mechaGroup.position.set(desktop ? 7.5 : 0, desktop ? 0 : -2.5, 0);
      }

      function onMouseMove(e) {
        mouseX = (e.clientX - windowHalfX) * 0.001;
        mouseY = (e.clientY - windowHalfY) * 0.001;
      }

      function onTouchMove(e) {
        if (e.touches && e.touches.length > 0) {
          mouseX = (e.touches[0].clientX - windowHalfX) * 0.001;
          mouseY = (e.touches[0].clientY - windowHalfY) * 0.001;
        }
      }

      function animate() {
        requestAnimationFrame(animate);
        const elapsed = clock.getElapsedTime();

        if (mechaGroup) {
          mechaGroup.rotation.z += 0.0028;
          mechaGroup.rotation.y += 0.0012;

          // Parallax smooth interpolation
          targetRotationY = mouseX * 0.65;
          targetRotationX = mouseY * 0.65;
          mechaGroup.rotation.y += (targetRotationY - mechaGroup.rotation.y) * 0.035;
          mechaGroup.rotation.x += (targetRotationX - mechaGroup.rotation.x) * 0.035;

          // Cute pulsing nucleus
          const nuc = mechaGroup.getObjectByName('nucleus');
          if (nuc) {
            const scale = 1.0 + Math.sin(elapsed * 2.5) * 0.12;
            nuc.scale.set(scale, scale, scale);
          }

          // Counter-rotate satellite gears
          for (let i = 0; i < 4; i++) {
            const g = mechaGroup.getObjectByName('gear_' + i);
            if (g) g.rotation.z -= 0.016;
          }
        }

        // Float Sakura Particles gently downward & sway
        if (sakuraMesh) {
          sakuraMesh.rotation.y = elapsed * 0.012;
          const posAttr = sakuraMesh.geometry.attributes.position;
          const posArr = posAttr.array;
          for (let i = 1; i < posArr.length; i += 3) {
            posArr[i] -= 0.035;
            if (posArr[i] < -30) {
              posArr[i] = 30;
            }
          }
          posAttr.needsUpdate = true;
        }

        renderer.render(scene, camera);
      }

      animate();
    } catch (err) {
      console.warn('Three.js scene init notice:', err);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
