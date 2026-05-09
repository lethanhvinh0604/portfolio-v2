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
            zIndex: -1,
            opacity: theme.mode === 'dark' ? 0.42 : 0.28
          }}
          options={{
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: 'push'
                },
                onHover: {
                  enable: true,
                  mode: ['grab']
                },
                resize: true
              },
              modes: {
                push: {
                  quantity: 2
                },
                grab: {
                  distance: 150,
                  links: {
                    opacity: 0.22
                  }
                },
                bubble: {
                  distance: 250,
                  size: 4,
                  duration: 2,
                  opacity: 0.35
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
                distance: 165,
                enable: true,
                opacity: 0.14,
                width: 1,
                triangles: {
                  enable: false,
                  opacity: 0
                }
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: {
                  default: 'out'
                },
                random: true,
                speed: 0.45,
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
                  area: 1000
                },
                value: 42
              },
              opacity: {
                value: 0.26,
                random: true,
                anim: {
                  enable: true,
                  speed: 0.45,
                  opacity_min: 0.06,
                  sync: false
                }
              },
              shape: {
                type: 'circle'
              },
              size: {
                value: { min: 0.6, max: 2.2 },
                random: true,
                anim: {
                  enable: true,
                  speed: 0.7,
                  size_min: 0.2,
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
