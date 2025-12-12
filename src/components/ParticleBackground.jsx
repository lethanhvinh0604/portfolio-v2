import { useCallback, useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { useTheme } from '../context/ThemeContext'

import { loadFull } from 'tsparticles'
export default function ParticleBackground() {
  const [init, setInit] = useState(false)
  const { theme } = useTheme()
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
            zIndex: -1
          }}
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: 'push'
                },
                onHover: {
                  enable: true,
                  mode: ['grab', 'bubble']
                },
                resize: true
              },
              modes: {
                push: {
                  quantity: 6
                },
                grab: {
                  distance: 200,
                  links: {
                    opacity: 0.8
                  }
                },
                bubble: {
                  distance: 250,
                  size: 8,
                  duration: 2,
                  opacity: 0.8
                },
                repulse: {
                  distance: 200,
                  duration: 0.4
                }
              }
            },
            particles: {
              color: {
                value: theme.particleColor
              },
              links: {
                color: theme.particleLink,
                distance: 180,
                enable: true,
                opacity: 0.6,
                width: 1.5,
                triangles: {
                  enable: true,
                  opacity: 0.05
                }
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: {
                  default: 'bounce'
                },
                random: true,
                speed: 2,
                straight: false,
                attract: {
                  enable: true,
                  rotateX: 600,
                  rotateY: 1200
                }
              },
              number: {
                density: {
                  enable: true,
                  area: 800
                },
                value: 100
              },
              opacity: {
                value: 0.6,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.2,
                  sync: false
                }
              },
              shape: {
                type: 'circle'
              },
              size: {
                value: { min: 1, max: 4 },
                random: true,
                anim: {
                  enable: true,
                  speed: 2,
                  size_min: 0.3,
                  sync: false
                }
              }
            },
            detectRetina: true
          }}
        />
      )}
    </>
  )
}
