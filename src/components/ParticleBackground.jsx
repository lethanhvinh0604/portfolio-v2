import { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadFull } from 'tsparticles'

export default function ParticleBackground() {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = (container) => {}

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          style={{
            zIndex: -1,
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
          options={{
            background: {
              color: {
                value: 'transparent'
              }
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: 'push'
                },
                onHover: {
                  enable: true,
                  mode: 'grab'
                },
                resize: true
              },
              modes: {
                push: {
                  quantity: 3
                },
                grab: {
                  distance: 140,
                  links: {
                    blink: false,
                    consent: false,
                    opacity: 0.8
                  }
                }
              }
            },
            particles: {
              color: {
                value: ['#3b82f6', '#06b6d4', '#8b5cf6', '#10b981']
              },
              links: {
                color: '#3b82f6',
                distance: 120,
                enable: true,
                opacity: 0.3,
                width: 1,
                triangles: {
                  enable: false,
                  opacity: 0.1
                }
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: {
                  default: 'out'
                },
                random: true,
                speed: 0.8,
                straight: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              },
              number: {
                density: {
                  enable: true,
                  area: 1000
                },
                value: 80
              },
              opacity: {
                value: { min: 0.1, max: 0.7 },
                animation: {
                  enable: true,
                  speed: 1,
                  minimumValue: 0.1,
                  sync: false
                }
              },
              shape: {
                type: ['circle', 'triangle', 'polygon'],
                polygon: {
                  sides: 6
                }
              },
              size: {
                value: { min: 5, max: 12 },
                animation: {
                  enable: true,
                  speed: 2,
                  minimumValue: 0.5,
                  sync: false
                }
              },
              twinkle: {
                particles: {
                  enable: true,
                  frequency: 0.05,
                  opacity: 1
                }
              }
            },
            detectRetina: true,
            smooth: true
          }}
        />
      )}
    </>
  )
}
