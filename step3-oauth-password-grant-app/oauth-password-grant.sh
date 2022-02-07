#!/bin/bash

https --form keycloak.kong.yk8s.me/auth/realms/tarangire-dev/protocol/openid-connect/token \
  grant_type=password \
  username=sample \
  password="secret11!@" \
  scope="openid profile email" \
  -a proxy-client:d60227dc-ac65-4f6c-88fd-42fb76530858 --print HhBb
  
