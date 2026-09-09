"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeMonolith() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    const width = container.clientWidth || 480;
    const height = container.clientHeight || 460;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 8);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height, false);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";
    renderer.domElement.className = "cursor-grab active:cursor-grabbing";
    container.appendChild(renderer.domElement);

    // Group to hold all objects for unified parallax
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x0a192f, 2.5);
    scene.add(ambientLight);

    const pointLightCyan = new THREE.PointLight(0x00f2fe, 4, 25);
    pointLightCyan.position.set(5, 5, 5);
    scene.add(pointLightCyan);

    const pointLightPurple = new THREE.PointLight(0x7928ca, 3.5, 25);
    pointLightPurple.position.set(-5, -4, 4);
    scene.add(pointLightPurple);

    // 1. Core: Glassy Futuristic Icosahedron Core
    const coreGeo = new THREE.IcosahedronGeometry(1.6, 0);
    const coreMat = new THREE.MeshPhongMaterial({
      color: 0x051329,
      emissive: 0x002b4d,
      specular: 0x00f2fe,
      shininess: 90,
      transparent: true,
      opacity: 0.85,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(coreMesh);

    // 2. Wireframe Cage around Core
    const cageGeo = new THREE.IcosahedronGeometry(1.85, 1);
    const cageMat = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const cageMesh = new THREE.Mesh(cageGeo, cageMat);
    mainGroup.add(cageMesh);

    // 3. Floating Kinetic Ring 1
    const ring1Geo = new THREE.TorusGeometry(2.7, 0.035, 16, 100);
    const ring1Mat = new THREE.MeshPhongMaterial({
      color: 0x00f2fe,
      emissive: 0x00f2fe,
      emissiveIntensity: 0.5,
      shininess: 100,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    // 4. Floating Kinetic Ring 2
    const ring2Geo = new THREE.TorusGeometry(3.2, 0.025, 16, 100);
    const ring2Mat = new THREE.MeshPhongMaterial({
      color: 0x9d4edd,
      emissive: 0x7b2cbf,
      emissiveIntensity: 0.4,
      shininess: 100,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    mainGroup.add(ring2);

    // 5. Interactive Particle Dust Cloud
    const particleCount = 320;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      pPos[i] = (Math.random() - 0.5) * 12;
      pPos[i + 1] = (Math.random() - 0.5) * 10;
      pPos[i + 2] = (Math.random() - 0.5) * 8;
    }
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0x00f2fe,
      size: 0.045,
      transparent: true,
      opacity: 0.75,
    });
    const particleField = new THREE.Points(pGeo, pMat);
    mainGroup.add(particleField);

    // Mouse parallax tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const margin = 200;
      if (
        event.clientX >= rect.left - margin &&
        event.clientX <= rect.right + margin &&
        event.clientY >= rect.top - margin &&
        event.clientY <= rect.bottom + margin
      ) {
        const rawX = ((event.clientX - rect.left) / (rect.width || 1) - 0.5) * 2;
        const rawY = -((event.clientY - rect.top) / (rect.height || 1) - 0.5) * 2;
        mouseX = Math.max(-1, Math.min(1, rawX));
        mouseY = Math.max(-1, Math.min(1, rawY));
      } else {
        mouseX = 0;
        mouseY = 0;
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    // Animation Loop
    const clock = new THREE.Clock();
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      coreMesh.rotation.y = elapsedTime * 0.4 + targetX * 0.8;
      coreMesh.rotation.x = elapsedTime * 0.25 + targetY * 0.8;

      cageMesh.rotation.y = -elapsedTime * 0.3 + targetX * 0.5;
      cageMesh.rotation.z = elapsedTime * 0.2;

      ring1.rotation.z = elapsedTime * 0.5;
      ring1.rotation.x = Math.PI / 3 + Math.sin(elapsedTime * 0.8) * 0.2 + targetY * 0.4;

      ring2.rotation.y = elapsedTime * 0.35 + targetX * 0.4;
      ring2.rotation.z = -elapsedTime * 0.4;

      particleField.rotation.y = elapsedTime * 0.08;

      mainGroup.rotation.y = targetX * 0.15;
      mainGroup.rotation.x = -targetY * 0.15;

      renderer.render(scene, camera);
    };

    animate();

    // Resize handling via ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const w = entry.contentRect.width;
        const h = entry.contentRect.height;
        if (w > 0 && h > 0) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h, false);
          renderer.domElement.style.width = "100%";
          renderer.domElement.style.height = "100%";
        }
      }
    });
    resizeObserver.observe(container);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();

      // Dispose resources
      coreGeo.dispose();
      coreMat.dispose();
      cageGeo.dispose();
      cageMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      pGeo.dispose();
      pMat.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full flex items-center justify-center min-h-[460px] lg:min-h-[480px]">
      {/* Radial Ambient Glow behind 3D container */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary-container/20 via-transparent to-secondary-container/25 rounded-3xl blur-2xl pointer-events-none" />

      <div className="cyber-card relative w-full rounded-2xl bg-surface-container-low/80 border border-outline-variant/40 backdrop-blur-xl p-element-gap-xs shadow-2xl overflow-hidden">
        {/* Terminal Headbar */}
        <div className="flex items-center justify-between px-element-gap-md py-2.5 bg-surface-container-lowest/80 rounded-t-xl mb-1 border-b border-outline-variant/20">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-error inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-secondary-fixed inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-primary-container inline-block" />
          </div>
          <span className="font-label-code text-xs text-on-surface-variant">
            shenzen-3d-renderer.engine.ts
          </span>
          <span className="font-label-code text-xs text-primary-container flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-container animate-ping" />
            60 FPS
          </span>
        </div>

        {/* 3D WebGL Canvas Container */}
        <div
          ref={containerRef}
          className="relative w-full h-[420px] md:h-[460px] rounded-xl overflow-hidden bg-surface-container-lowest"
        />

        {/* Floating Overlay Card 1: Top Left */}
        <div className="absolute top-14 left-4 p-element-gap-sm rounded-xl bg-surface-container-highest/90 border border-outline-variant/50 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex items-center gap-element-gap-sm max-w-[240px] hover:border-primary-container/60 transition-all duration-300 pointer-events-auto">
          <div className="w-8 h-8 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary-container">
            <span className="material-symbols-outlined text-[18px]">speed</span>
          </div>
          <div className="min-w-0">
            <div className="font-label-code text-[11px] text-on-surface-variant uppercase tracking-wider">
              Telemetry Edge
            </div>
            <div className="font-headline-md text-xs font-bold text-primary truncate">
              Latency &lt; 45ms
            </div>
          </div>
        </div>

        {/* Floating Overlay Card 2: Center Right */}
        <div className="absolute top-1/2 -translate-y-1/2 right-4 p-element-gap-sm rounded-xl bg-surface-container-highest/90 border border-outline-variant/50 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex items-center gap-element-gap-sm max-w-[270px] hover:border-secondary/60 transition-all duration-300 pointer-events-auto">
          <div className="w-8 h-8 rounded-lg bg-secondary-container/40 flex items-center justify-center text-secondary">
            <span className="material-symbols-outlined text-[18px]">memory</span>
          </div>
          <div className="min-w-0">
            <div className="font-label-code text-[11px] text-on-surface-variant uppercase tracking-wider">
              Fullstack Matrix
            </div>
            <div className="font-body-sm text-xs font-semibold text-primary truncate">
              Next.js 16 • React 19 • Cloud
            </div>
          </div>
        </div>

        {/* Floating Overlay Card 3: Bottom Left */}
        <div className="absolute bottom-6 left-6 p-element-gap-sm rounded-xl bg-surface-container-highest/90 border border-primary-container/30 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex items-center gap-element-gap-sm pointer-events-auto">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-container" />
          </span>
          <div className="min-w-0">
            <span className="font-label-code text-xs text-primary-container font-semibold">
              ROI Booster: +3.8x Qualified Leads
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
