import math, random

def generate_exact_reference_topo(seed_id, width=1000, height=600):
    random.seed(seed_id * 12345)
    
    svg = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" width="100%" height="100%">']
    svg.append('<rect width="100%" height="100%" fill="#ffffff"/>')
    svg.append('<g stroke="#111111" fill="none" stroke-linecap="round" stroke-linejoin="round">')
    
    # Restauration exacte des 6 centres de relief denses et riches de la version préférée
    peaks = [
      (150, 180, 220, 1.2),
      (180, 480, 250, 1.0),
      (650, 220, 200, 1.3),
      (750, 460, 240, 1.1),
      (400, 100, 160, 0.9),
      (900, 120, 180, 1.2)
    ]
    
    for cx, cy, max_r, aspect in peaks:
        num_rings = 9
        # Espacement régulier et net (18px) qui maintient les lignes parallèles sans qu'elles se touchent
        ring_step = 18
        phase1 = random.uniform(0, 6.28)
        phase2 = random.uniform(0, 6.28)
        
        for r_idx in range(1, num_rings + 1):
            r = r_idx * ring_step
            num_pts = 36
            pts = []
            for i in range(num_pts):
                angle = (i / num_pts) * 2 * math.pi
                w1 = math.sin(angle * 3 + phase1) * (r * 0.08)
                w2 = math.cos(angle * 2 + phase2) * (r * 0.05)
                dist = r + w1 + w2
                x = cx + math.cos(angle) * dist
                y = cy + math.sin(angle) * dist * aspect
                pts.append((x, y))
            
            path_cmds = [f'M {pts[0][0]:.1f},{pts[0][1]:.1f}']
            for i in range(num_pts):
                p0 = pts[i]
                p1 = pts[(i + 1) % num_pts]
                p2 = pts[(i + 2) % num_pts]
                p_prev = pts[i - 1]
                
                c1x = p0[0] + (p1[0] - p_prev[0]) * 0.2
                c1y = p0[1] + (p1[1] - p_prev[1]) * 0.2
                c2x = p1[0] - (p2[0] - p0[0]) * 0.2
                c2y = p1[1] - (p2[1] - p0[0]) * 0.2
                
                path_cmds.append(f'C {c1x:.1f},{c1y:.1f} {c2x:.1f},{c2y:.1f} {p1[0]:.1f},{p1[1]:.1f}')
            
            path_d = ' '.join(path_cmds) + ' Z'
            is_dashed = (r_idx % 3 == 0)
            is_bold = (r_idx % 4 == 0 and not is_dashed)
            
            sw = '1.8' if is_bold else ('1.2' if is_dashed else '0.85')
            dash = ' stroke-dasharray="5 5"' if is_dashed else ''
            opacity = '0.85' if is_dashed else ('0.95' if is_bold else '0.7')
            
            svg.append(f'  <path d="{path_d}" stroke-width="{sw}"{dash} opacity="{opacity}"/>')
            
    for y_start in [120, 320, 520]:
        pts = []
        for x in range(-50, 1050, 40):
            y = y_start + math.sin(x * 0.005 + seed_id) * 50 + math.cos(x * 0.01) * 25
            pts.append((x, y))
            
        path_cmds = [f'M {pts[0][0]:.1f},{pts[0][1]:.1f}']
        for i in range(len(pts) - 1):
            p0 = pts[i]
            p1 = pts[i+1]
            path_cmds.append(f'Q {p0[0]:.1f},{p0[1]:.1f} {p1[0]:.1f},{p1[1]:.1f}')
            
        svg.append(f'  <path d="{" ".join(path_cmds)}" stroke-width="1.3" stroke-dasharray="5 5" opacity="0.8"/>')
        
    svg.append('</g>')
    svg.append('</svg>')
    return '\n'.join(svg)

for i in range(1, 6):
    content = generate_exact_reference_topo(i)
    with open(f'public/assets/topo-card-{i}.svg', 'w') as f:
        f.write(content)

print('Restored previous preferred Topo SVGs successfully!')
