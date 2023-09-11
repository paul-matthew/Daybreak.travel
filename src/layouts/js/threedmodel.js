import * as THREE from 'three';
import SceneInit from 'src/villa/SceneInit';

export default function HomeRoute() {
    let loadedModel;

useEffect(() => {
    //3D MODEL
     console.log("ah yo")
    const test = new SceneInit('3d-container');
  var renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('3d-container'),
    antialias: true,
    alpha: true // Set alpha to true for transparent background
  });
  test.initialize();
  
  let loadedModel;
  import('three/examples/jsm/loaders/GLTFLoader.js')
  
  .then(({ GLTFLoader }) => {
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('src/villa/scene.gltf', (gltfScene) => {
      loadedModel = gltfScene;
      adjustModelBasedOnScreenSize(gltfScene);

      // Add the model to the scene
      test.scene.add(gltfScene.scene);

      // Initialize AnimationMixer
      const mixer = new THREE.AnimationMixer(gltfScene.scene);

      // Load animations from the gltfScene
      const animations = gltfScene.animations;
      const actions = animations.map(animation => mixer.clipAction(animation));

      // Start playing the animations
      actions.forEach(action => action.play());

      // Create an animate function for rendering
      const animate = () => {
        requestAnimationFrame(animate);

        // Update the animation mixer
        const delta = test.clock.getDelta();
        mixer.update(delta);

        renderer.render(test.scene, test.camera);
      };

      // Start the animation loop
      animate();
    });
  })
  .catch(error => {
    // Handle any errors that might occur during the import
    console.error('Error importing GLTFLoader:', error);
  });

  function adjustModelBasedOnScreenSize(gltfScene) {
    const screenWidth = window.innerWidth;

    if (screenWidth < 500) {
      gltfScene.scene.rotation.y = Math.PI / 0.79;
      gltfScene.scene.position.y = -4;
      gltfScene.scene.position.x = 5;
      gltfScene.scene.scale.set(1, 1, 1);
    } else if (screenWidth >= 500 && screenWidth < 768) {
      gltfScene.scene.rotation.y = Math.PI / 0.79;
      gltfScene.scene.position.y = 1;
      gltfScene.scene.position.x = 6;
      gltfScene.scene.scale.set(1.5, 1.5, 1.5);
    } else if (screenWidth >= 768 && screenWidth < 1024) {
      gltfScene.scene.rotation.y = Math.PI / 0.79;
      gltfScene.scene.position.y = 2;
      gltfScene.scene.position.x = 5;
      gltfScene.scene.scale.set(1.5, 1.5, 1.5);
    } else {
      gltfScene.scene.rotation.y = Math.PI / 0.89;
      gltfScene.scene.position.y = -10;
      gltfScene.scene.position.x = 12;
      gltfScene.scene.scale.set(2.5, 2.5, 2.5);
    }
    // gltfScene.scene.classList.add('model-transition');
  }
  
  return () => {
    if (loadedModel) {
      loadedModel.scene.traverse(child => {
        if (child.isMesh) {
          child.material.dispose();
          child.material = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 });
        }
      });
    }
  };
}, []);

}