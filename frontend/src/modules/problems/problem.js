export class Problem {
    /**
     * Se encarga del enrutamiento dentro de la aplicación
     * @param {any} config - Configuración de la aplicación
     * @param {any} router - Enrutador principal de la aplicación
     */
    configureRouter(config, router) {
        config.map([{
                route: '',
                name: 'problems',
                moduleId: 'modules/problems/general-problems/general-problems',
                title: 'Problemas',
                settings: {
                    roles: ['admin', 'coach', 'student']
                }
            },
            {
                name: 'category',
                route: 'categoria/:id',
                moduleId: 'modules/problems/category-problems/category-problems',
                title: 'Problemas',
                settings: {
                    roles: ['admin', 'coach', 'student']
                }
            },
            {
                name: 'problems-creator',
                route: 'nuevo',
                moduleId: 'modules/problems/problems-creator/problems-creator',
                title: 'Nuevo problema',
                settings: {
                    roles: ['admin', 'coach']
                }
            },
            {
                name: 'edit-problem',
                route: ':id/editar',
                moduleId: 'modules/problems/problems-creator/problems-editor',
                title: 'Editar problema',
                settings: {
                    roles: ['admin', 'coach']
                }
            },
            {
                name: 'view-problem',
                route: [':id/detalle', ':id/detalle/:lang'],
                moduleId: 'modules/problems/view-problem/view-problem',
                title: 'Problema',
                settings: {
                    roles: ['admin', 'coach', 'student']
                }
            },
            {
                name: 'editor-online',
                route: 'bloques', //route: ':id/bloques',
                moduleId: 'modules/problems/problem-editor-online/problem-editor-online',
                title: 'Envía tu solución con bloques',
                settings: {
                    roles: ['visitor']
                }
            }
        ])
        this.router = router
    }
}