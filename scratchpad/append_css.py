css = r'''/* === appended === */
.site-header { height: 72px; padding: 0 var(--space-6); display: flex; align-items: center; justify-content: space-between; background: var(--color-bg); position: sticky; top: 0; z-index: var(--z-sticky); border-bottom: 1px solid var(--color-border); gap: var(--space-4); }
'''
with open('app/globals.css','a') as f:
    f.write(css)
print("ok")
