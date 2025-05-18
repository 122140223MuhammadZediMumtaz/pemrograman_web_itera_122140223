from pyramid.view import view_config
from pyramid.httpexceptions import HTTPNotFound, HTTPBadRequest
from ..models import Matakuliah

@view_config(route_name='matakuliah_list', renderer='json')
def list_view(request):
    items = request.dbsession.query(Matakuliah).all()
    return {'matakuliah': [i.to_dict() for i in items]}

@view_config(route_name='matakuliah_detail', renderer='json')
def detail_view(request):
    item = request.dbsession.query(Matakuliah).get(request.matchdict['id'])
    if not item:
        return HTTPNotFound(json_body={'error': 'Data tidak ditemukan'})
    return {'matakuliah': item.to_dict()}

@view_config(route_name='matakuliah_add', request_method='POST', renderer='json')
def add_view(request):
    try:
        data = request.json_body
        item = Matakuliah(**data)
        request.dbsession.add(item)
        request.dbsession.flush()
        return {'success': True, 'matakuliah': item.to_dict()}
    except Exception as e:
        return HTTPBadRequest(json_body={'error': str(e)})

@view_config(route_name='matakuliah_update', request_method='PUT', renderer='json')
def update_view(request):
    item = request.dbsession.query(Matakuliah).get(request.matchdict['id'])
    if not item:
        return HTTPNotFound(json_body={'error': 'Data tidak ditemukan'})
    data = request.json_body
    for attr in ['kode_mk', 'nama_mk', 'sks', 'semester']:
        if attr in data:
            setattr(item, attr, data[attr])
    return {'success': True, 'matakuliah': item.to_dict()}

@view_config(route_name='matakuliah_delete', request_method='DELETE', renderer='json')
def delete_view(request):
    item = request.dbsession.query(Matakuliah).get(request.matchdict['id'])
    if not item:
        return HTTPNotFound(json_body={'error': 'Data tidak ditemukan'})
    request.dbsession.delete(item)
    return {'success': True, 'message': f'Data {item.nama_mk} dihapus'}
