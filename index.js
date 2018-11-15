window.onload = function(event) {

    var camera, scene, renderer;
    var effect, controls;
    var element, container;
    var composer, particle;

    var clock = new THREE.Clock();

    init();
    animate();

    function init() {
      renderer = new THREE.WebGLRenderer();
      element = renderer.domElement;
      container = document.getElementById('container');
      container.appendChild(element);

      effect = new THREE.StereoEffect(renderer);
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(90, window.innerWidth/window.innerHeight, 0.01, 1000);
      camera.position.set(-500, 400, -200);
      scene.add(camera);

      particle = new THREE.Object3D();
      scene.add(particle);

      var geometry = new THREE.SphereGeometry(2, 0);
      var material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        shading: THREE.FlatShading
      });

      for (var i = 0; i < 1000; i++) {
        var mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
        mesh.position.multiplyScalar(90 + (Math.random() * 700));
        mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
        particle.add(mesh);
      }

      var mat = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        shading: THREE.FlatShading
      });

      var mat2 = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        wireframe: true,
        side: THREE.DoubleSide
      });

      var ambientLight = new THREE.AmbientLight(0x999999 );
      scene.add(ambientLight);

      var lights = [];
      lights[0] = new THREE.DirectionalLight( 0xffffff, 1 );
      lights[0].position.set( 1, 0, 0 );
      lights[1] = new THREE.DirectionalLight( 0x11E8BB, 1 );
      lights[1].position.set( 0.75, 1, 0.5 );
      lights[2] = new THREE.DirectionalLight( 0x8200C9, 1 );
      lights[2].position.set( -0.75, -1, 0.5 );
      scene.add( lights[0] );
      scene.add( lights[1] );
      scene.add( lights[2] );


      controls = new THREE.OrbitControls(camera, element);
      // controls.rotateUp(Math.PI / 4);
      controls.target.set(
        camera.position.x + 0.1,
        camera.position.y,
        camera.position.z
      );
      controls.noZoom = true;
      controls.noPan = true;

      function setOrientationControls(e) {
        if (!e.alpha) {
          return;
        }

        controls = new THREE.DeviceOrientationControls(camera, true);
        controls.connect();
        controls.update();

        element.addEventListener('click', fullscreen, false);

        window.removeEventListener('deviceorientation', setOrientationControls, true);
      }
      window.addEventListener('deviceorientation', setOrientationControls, true);


      var light = new THREE.HemisphereLight(0x777777, 0x000000, 0.6);
      scene.add(light);



      var mesh = new THREE.Mesh(geometry, material);
      mesh.rotation.x = -Math.PI / 2;
      scene.add(mesh);

      cube = new THREE.Mesh( new THREE.CubeGeometry( 200, 200, 200 ), new THREE.MeshNormalMaterial() );
      cube.position.y = 300;
      cube.position.z = 20;
      cube.position.x = 0;

      scene.add(cube);

      window.addEventListener('resize', resize, false);
      setTimeout(resize, 1);
    }

    function resize() {
      var width = container.offsetWidth;
      var height = container.offsetHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      effect.setSize(width, height);
    }

    function update(dt) {
      resize();

      camera.updateProjectionMatrix();

      controls.update(dt);
    }

    function render(dt) {
      cube.rotation.x += 0.02;
      cube.rotation.y += 0.0225;
      cube.rotation.z += 0.0175;

      effect.render(scene, camera);
    }

    function animate(t) {
      requestAnimationFrame(animate);

      particle.rotation.x += 0.0000;
      particle.rotation.y -= 0.0040;

      cube.rotation.x += 0.005;
      cube.rotation.y += 0.01;

      update(clock.getDelta());
      render(clock.getDelta());
    }

    function fullscreen() {
      if (container.requestFullscreen) {
        container.requestFullscreen();
      } else if (container.msRequestFullscreen) {
        container.msRequestFullscreen();
      } else if (container.mozRequestFullScreen) {
        container.mozRequestFullScreen();
      } else if (container.webkitRequestFullscreen) {
        container.webkitRequestFullscreen();
      }
    }

}
