import requests
from urllib.parse import urljoin

class Identicate:
    def __init__(self, host):
        try:
            self.baseURL = urljoin(host, '/')
        except Exception as e:
            raise ValueError("Invalid URL for host") from e

    def is_allowed(self, user, permission):
        params = {'user': user, 'permission': permission}
        response = requests.get(urljoin(self.baseURL, '/acl/user/allowed'), params=params)
        return response.json()

    def user_lookup(self, user):
        params = {'user': user}
        response = requests.get(urljoin(self.baseURL, '/acl/user/lookup'), params=params)
        return response.json()

    def role_lookup(self, role):
        params = {'role': role}
        response = requests.get(urljoin(self.baseURL, '/acl/role/lookup'), params=params)
        return response.json()

    def service_lookup(self, service):
        params = {'service': service}
        response = requests.get(urljoin(self.baseURL, '/acl/service/lookup'), params=params)
        return response.json()